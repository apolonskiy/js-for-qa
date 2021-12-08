import { BaseModel } from "./BaseModel";

export class TcExamplePage extends BaseModel {
    pageElements = {
        testCheckbox: '[data-testid="remote-testing-checkbox"]'
    }

    clickOnTestCheckbox = async () => {
        await this.testController.click(this.selector(this.pageElements.testCheckbox));
    }

    async isCheckboxChecked() {
        return this.selector(this.pageElements.testCheckbox).checked
    }
}