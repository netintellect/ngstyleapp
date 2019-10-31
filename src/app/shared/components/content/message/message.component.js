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
var MessageComponent = /** @class */ (function () {
    function MessageComponent(hostRef) {
        this.hostRef = hostRef;
        this.isLayout01 = false;
    }
    MessageComponent.prototype.ngAfterContentInit = function () {
        this.themeClassNames = this.hostRef.nativeElement.className.split(' ');
        if (this.themeClassNames.indexOf('layout--01') > -1) {
            this.isLayout01 = true;
        }
    };
    __decorate([
        core_1.ContentChild('messageContent'),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "messageContent", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'saa-message',
            templateUrl: 'message.component.html',
            styleUrls: ['message.component.css']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map