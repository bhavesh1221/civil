// import { Component } from '@angular/core';
import {
  AfterViewInit,
  Component,
  NgZone,
  OnInit,
  HostListener,
} from "@angular/core";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import emailjs from "emailjs-com";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  files: File[] = [];
  isDragOver: boolean = false;
  zoom = 12;
  projectCount = 0;
  hasAnimated = false;
  constructor(private zone: NgZone) {}
  ngOnInit() {
    const templateParams = {
      name: "James",
      notes: "Check this out!",
    };
    emailjs
      .send(
        "<YOUR SERVICE ID>",
        "<YOUR TEMPLATE ID>",
        templateParams,
        "<YOUR USER ID>"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const element = document.getElementById("project-counter");
    if (!element || this.hasAnimated) return;

    const rect = element.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;

    if (isVisible) {
      this.animateCount(500);
      this.hasAnimated = true;
    }
  }

  animateCount(target: number) {
    const interval = setInterval(() => {
      if (this.projectCount < target) {
        this.projectCount += 5;
      } else {
        this.projectCount = target;
        clearInterval(interval);
      }
    }, 30); // animation speed
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
      alert("Maximum file limit (30) exceeded.");
    }
  }

  //maps code
  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      let root = am5.Root.new("chartdiv");

      let chart = root.container.children.push(
        am5map.MapChart.new(root, {
          // panX: false,
          // panY: false,
          wheelX: "none",
          wheelY: "none",
          projection: am5map.geoMercator(),
        })
      );

      let polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
        })
      );

      polygonSeries.mapPolygons.template.setAll({
        fill: am5.color(0xd3d3d3),
        stroke: am5.color(0xaaaaaa),
        tooltipText: "{name}",
      });

      let pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

      // Bullets (dots + country labels)
      pointSeries.bullets.push((root, series, dataItem) => {
        const container = am5.Container.new(root, {
          layout: root.horizontalLayout, // optional, positions label next to dot
        });

        const circle = am5.Circle.new(root, {
          radius: 6,
          fill: am5.color(0xff5733),
          tooltipText: "{title}",
        });

        const label = am5.Label.new(root, {
          text: (dataItem.dataContext as { title: string }).title,
          centerY: am5.p50,
          x: 10,
          fill: am5.color(0xff0000),

          fontSize: 14,
        });

        // Add both elements manually
        container.children.push(circle);
        container.children.push(label);

        return am5.Bullet.new(root, { sprite: container });
      });

      pointSeries.data.setAll([
        {
          title: "India",
          geometry: { type: "Point", coordinates: [78.9629, 20.5937] },
        },
        {
          title: "UAE",
          geometry: { type: "Point", coordinates: [53.8478, 23.4241] },
        },
        {
          title: "USA",
          geometry: { type: "Point", coordinates: [-95.7129, 37.0902] },
        },
        {
          title: "UK",
          geometry: { type: "Point", coordinates: [-3.435973, 55.378051] },
        },
        {
          title: "Canada",
          geometry: { type: "Point", coordinates: [-106.3468, 56.1304] },
        },
        {
          title: "Australia",
          geometry: { type: "Point", coordinates: [133.7751, -25.2744] },
        },
      ]);
    });
  }
}
