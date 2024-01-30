class LoginAppPage {

    get userName() { return $('//android.widget.EditText[@content-desc="test-Username"]') };
    get password() { return $('//android.widget.EditText[@content-desc="test-Password"]') };
    get loginBtn() { return $('//android.view.ViewGroup[@content-desc="test-LOGIN"]') };
    get productLbl() { return $('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView') };

}
export default new LoginAppPage()