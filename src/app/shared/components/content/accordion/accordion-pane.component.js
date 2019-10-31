"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AccordionPaneComponent = /** @class */ (function () {
    function AccordionPaneComponent() {
        this.active = false;
    }
    __decorate([
        core_1.ViewChild(core_1.TemplateRef),
        __metadata("design:type", Object)
    ], AccordionPaneComponent.prototype, "template", void 0);
    __decorate([
        core_1.Input('title'),
        __metadata("design:type", String)
    ], AccordionPaneComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AccordionPaneComponent.prototype, "active", void 0);
    AccordionPaneComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'saa-accordion-pane',
            templateUrl: 'accordion-pane.component.html',
            styleUrls: ['accordion-pane.component.css']
        })
    ], AccordionPaneComponent);
    return AccordionPaneComponent;
}());
exports.AccordionPaneComponent = AccordionPaneComponent;
//# sourceMappingURL=accordion-pane.component.js.map