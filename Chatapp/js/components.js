const components = {}
    components.welcomePage = `<h3>Hello world</h3>`
    components.registerPage=`<div class="register-container">
    <div class="background-img"></div>
    <div class="form-wrapper">
        <div class="register-header">MinX Chat</div>
        <form id="register-form">
            <div class="name-wrapper">
                <div class="input-wrapper">
                    <input type="text" placeholder="First name" name="firstName">
                    <div class="err" id="first-name-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Last name" name="lastName">
                    <div class="err" id="last-name-error"></div>
                </div>
            </div>
            <div class="input-wrapper">
                <input type="text" placeholder="Email" name="email">
                <div class="err" id="email-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password" name="password">
                <div class="err" id="password-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Confirm Password" name="confirmPassword">
                <div class="err" id="confirm-password-error"></div>
            </div>

            <div class="register-form-action">
                <div>Already have an account?
                    <span id="redirect-login"  class="cursor-pointer">Login</span>
                </div>
                <button class="btn" type="submit">Register</button>
            </div>
        </form>
    </div>
</div>`
    components.loginPage = `<div class="login-container">
    <div class="background-img"></div>
    <div class="form-wrapper">
        <div class="login-header">MinX Chat</div>
        <form id="login-form">
            <div class="input-wrapper">
                <input type="text" placeholder="Email" name="email">
                <div class="err" id="email-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password" name="password">
                <div class="err" id="password-error"></div>
            </div>
            <div class="login-form-action">
                <div>Don't have an account?
                    <span id="redirect-register"  class="cursor-pointer">Register</span>
                </div>
                <button class="btn" type="submit">Login</button>
            </div>
        </form>
    </div>
</div>`