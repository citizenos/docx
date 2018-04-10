import { XmlAttributeComponent, XmlComponent } from "file/xml-components";
export interface ILatentStyleExceptionAttributesProperties {
    name?: string;
    uiPriority?: string;
    qFormat?: string;
    semiHidden?: string;
    unhideWhenUsed?: string;
}
export declare class LatentStyleExceptionAttributes extends XmlAttributeComponent<ILatentStyleExceptionAttributesProperties> {
    protected xmlKeys: {
        name: string;
        uiPriority: string;
        qFormat: string;
        semiHidden: string;
        unhideWhenUsed: string;
    };
}
export declare class LatentStyleException extends XmlComponent {
    constructor(attributes: ILatentStyleExceptionAttributesProperties);
}
