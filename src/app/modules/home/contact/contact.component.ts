import { Component, NgZone, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  files: File[] = [];
  isDragOver = false;

  constructor(private zone: NgZone) {}

  ngOnInit() {}

  async sendEmail(e: Event) {
    e.preventDefault();

    const attachments = await Promise.all(
      this.files.map(file => new Promise<{ name: string; data: string }>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64Data = (reader.result as string).split(',')[1];
          resolve({ name: file.name, data: base64Data });
        };
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
      }))
    );

    const templateParams: any = {
      name: (document.querySelector('input[placeholder="Name"]') as HTMLInputElement)?.value,
      company: (document.querySelector('input[placeholder="Company Name"]') as HTMLInputElement)?.value,
      email: (document.querySelector('input[placeholder="Email ID*"]') as HTMLInputElement)?.value,
      contact: (document.querySelector('input[placeholder="Contact"]') as HTMLInputElement)?.value,
      subject: (document.querySelector('input[placeholder="Subject*"]') as HTMLInputElement)?.value,
      message: (document.querySelector('textarea') as HTMLTextAreaElement)?.value,
      attachments
    };

    emailjs.send('SERVICE_ID', 'TEMPLATE_ID', templateParams, 'PUBLIC_KEY')
      .then(res => {
        console.log('SUCCESS!', res.status, res.text);
        alert('Message sent successfully!');
        this.files = [];
      })
      .catch(err => {
        console.error('FAILED...', err);
        alert('Something went wrong. Please try again.');
      });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) this.addFiles(input.files);
  }

  onDragOver(event: DragEvent): void { event.preventDefault(); this.isDragOver = true; }
  onDragLeave(event: DragEvent): void { event.preventDefault(); this.isDragOver = false; }
  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    if (event.dataTransfer?.files) this.addFiles(event.dataTransfer.files);
  }

  addFiles(fileList: FileList): void {
    const newFiles = Array.from(fileList);
    const totalFiles = [...this.files, ...newFiles];
    if (totalFiles.length <= 30) {
      this.files = totalFiles;
    } else {
      alert('Maximum file limit (30) exceeded.');
    }
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      const root = am5.Root.new('chartdiv');
      const chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: 'rotateX',
          projection: am5map.geoMercator()
        })
      );

      const polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
          valueField: 'value'
        })
      );

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: '{name}',
        interactive: true
      });

      polygonSeries.mapPolygons.template.states.create('hover', {
        fill: am5.color(0x677935)
      });

      polygonSeries.mapPolygons.template.adapters.add('fill', (fill, target) => {
        const id = (target.dataItem?.dataContext as { id?: string })?.id;
        if (['IN', 'AE'].includes(id || '')) return am5.color(0xff5733);
        return fill;
      });
    });
  }
}