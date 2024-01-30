class HerokuApp {
    get inputs() { return $('=Inputs') }
    get numberfield() { return $('input[type="number"]') }
    get keypress() { return $('=Key Presses') }
    get dragdrop() { return $('=Drag and Drop') }
    get box_a() { return $('#column-a') }
    get box_b() { return $('#column-b') }
    get dropdownlink() { return $('=Dropdown') }
    get dropdown() { return $('#dropdown') }
    get multiplewindows() { return $('=Multiple Windows') }
    get addRemoveElements() { return $('=Add/Remove Elements') }
    get addElementBtn() { return $('//button[text()="Add Element"]') }
    get clickHere() { return $('=Click Here') }
}

export default new HerokuApp()