// import { Component } from '@angular/core';
import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  files: File[] = [];
  isDragOver: boolean = false;
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 22.7196, lng: 75.8577 }; // Indore
  constructor(private zone: NgZone) {}
  ngOnInit() {
      
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.addFiles(input.files);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    if (event.dataTransfer?.files) {
      this.addFiles(event.dataTransfer.files);
    }
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

  //maps code
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let root = am5.Root.new("chartdiv");

      let chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: "rotateX",
          projection: am5map.geoMercator()
        })
      );

      let polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
          valueField: "value",
        })
      );

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        interactive: true
      });

      polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color(0x677935)
      });

      // Custom highlighted countries
      polygonSeries.mapPolygons.template.adapters.add("fill", (fill, target) => {
        let id = (target.dataItem?.dataContext as { id?: string })?.id;
        if (["IN", "AE"].includes(id || '')) {
          return am5.color(0xff5733); // Your highlight color
        }
        return fill;
      });
    });
  }
}
