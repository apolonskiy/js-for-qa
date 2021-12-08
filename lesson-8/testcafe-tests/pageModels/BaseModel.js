import {ClientFunction} from 'testcafe';

export class BaseModel {
    constructor(testController, selector) {
        this.testController = testController;
        this.selector = selector;
    }

    async navigate(url) {
        await this.testController.navigateTo(url)
    }

    getCurrntUrl = ClientFunction(() => window.location.href);
}