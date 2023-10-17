import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Doc } from '../../domain/doc';
import { Title, Meta } from '@angular/platform-browser';
import { Code } from '../../domain/code';

@Component({
    selector: 'app-doc',
    templateUrl: './app.doc.component.html',
    styles: [
        `
            #canvas {
                background-image: radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 0);
                background-size: 20px 20px;
                box-shadow: inset 0px 0px 50px 50px white;
                height: 300px;
                padding: 2rem;
                border-radius: 10px;
                margin-bottom: 1rem;
                position: relative;

                display: flex;
                align-items: center;
                justify-content: center;
            }

            #canvas #copy {
                position: absolute;
                top: 1rem;
                right: 1rem;
            }

            #wrapper {
                display: flex;
                gap: 1em;
            }

            #editor {
                flex: 1;
                padding: 2rem;
                border-radius: 10px;
            }

            #code {
                border-radius: 10px;
            }

            :host ::ng-deep .language-markup {
                margin-top: 0;
            }

            :host ::ng-deep #code code {
                left: -100px;
                background: transparent !important;
            }

            .doc-table {
                min-width: initial;
            }
        `
    ]
})
export class AppDoc implements OnInit, OnChanges {
    @Input() docTitle!: string;

    @Input() docs!: Doc[];

    @Input() header!: string;

    @Input() description!: string;

    @Input() apiDocs!: string[];

    activeTab!: number;

    public icon = 'pi pi-star';
    public dropdownPosition = 'left';
    public options = ['left'];

    public severity = 'Primary';
    public severityOptions = ['Primary'];

    public size = 'Normal';
    public sizeOptions = ['Normal'];

    public booleanOptions = [
        { label: 'Yes', value: true },
        { label: 'No', value: false }
    ];

    public ripple = true;
    public loading = false;

    constructor(private router: Router, private titleService: Title, private metaService: Meta) {}

    public code: Code = {
        basic: `
            <p-button 
              pRipple
              label="Hello Prime"
              icon="pi pi-star"
            />
        `
    };

    ngOnInit() {
        if (this.router.url.includes('#api')) {
            this.activeTab = 1;
        } else {
            this.activeTab = 0;
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.docTitle && changes.docTitle.currentValue) {
            this.titleService.setTitle(changes.docTitle.currentValue);
        }

        if (changes.description && changes.description.currentValue) {
            this.metaService.updateTag({ name: 'description', content: changes.description.currentValue });
        }
    }

    activateTab(index) {
        this.activeTab = index;
    }
}
