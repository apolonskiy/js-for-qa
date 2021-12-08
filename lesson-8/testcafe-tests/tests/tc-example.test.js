import {t, Selector} from 'testcafe';
import {userData} from '../data/user.js'
import { TcExamplePage } from '../pageModels/TcExamplePage.js';

const tcPageModel = new TcExamplePage(t, Selector);

fixture('Testcafe example page tests')
    .page('https://devexpress.github.io/testcafe/example/')
    .beforeEach(async () => {
        await t.maximizeWindow();
    })

test.only.meta({
    testType: 'QA'
})('Verify work with checkboxes', async () => {
    await tcPageModel.clickOnTestCheckbox();
    await t.expect(await tcPageModel.isCheckboxChecked).ok('This faield on checkbox assertion');
})


test('Verify slider work', async () => {
    await t.maximizeWindow()
    await t.click(Selector('[data-testid="tried-testcafe-checkbox"]'));
    await t.expect(Selector('div[id="slider"] span').getAttribute('style')).eql('left: 0%;');
    await t.dragToElement(Selector('div[id="slider"] span'), Selector('div[class="slider-value"]').find('input'));
    // const width = await Selector('[id="slider"]').clientWidth;
    // await t.drag(Selector('div[id="slider"] span'), Math.ceil(width/10), 0);
    await t.expect(Selector('div[id="slider"] span').getAttribute('style')).eql('left: 33.3333%;');
})

test('Verify select options', async () => {
    const getSelectedText = async (
        element,
        subSelector  = 'option'
      ) => {
        const parentSelector = Selector(element);
        const selectedSelector = await parentSelector
          .find(subSelector)
          .filter(node => node?.selected)
          .nth(0);
        const text = (await selectedSelector.textContent).trim();
        return text;
      }

      await t.click(Selector('[data-testid="preferred-interface-select"]'))
            .click(Selector('option').withExactText('Both'));
    await t.expect(await getSelectedText('[data-testid="preferred-interface-select"]')).eql('Both');
    
})

test.meta({
    testType: 'premerge'
})('Verify textarea work and faker', async() => {
    await t.click(Selector('[data-testid="tried-testcafe-checkbox"]'));
    await t.typeText(Selector('[data-testid="comments-area"]'), JSON.stringify(userData), {paste: true});
    await t.wait(3000);
    await t.expect(Selector('[data-testid="comments-area"]').value).eql(JSON.stringify(userData));
})

