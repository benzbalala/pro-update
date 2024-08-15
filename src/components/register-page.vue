<template>
    <div id="login-form" class="login-page">
        <div class="form-box">
            <div class="title">
                <h2>Register</h2>
            </div>
            <ul>
                <li v-for="error in errors" :key="error.id" class="msg">{{ error.message }}</li>
            </ul>
            <form @submit.prevent="registerUser" class="input-group-register">
                <div class="user-box">
                    <input type="text" v-model="name" name="name" class="input-field" required />
                    <label>Name</label>
                </div>
                <div class="user-box">
                    <input type="email" v-model="email" name="email" class="input-field" required />
                    <label>Email</label>
                </div>
                <div class="user-box">
                    <input type="password" v-model="password" name="password" class="input-field" required />
                    <label>Password</label>
                </div>
                <div class="user-box">
                    <input type="password" v-model="ConfirmPassword" name="ConfirmPassword" class="input-field"
                        required />
                    <label>Confirm Password</label>
                </div>
                <div class="login-register">
                    <a href="/users/login" class="formlogin">Login</a>
                </div>
                <button type="submit" class="submit-btn">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            ConfirmPassword: '',
            messages: {
                error: '',
                success_msg: ''
            }
        };
    },
    methods: {
        registerUser() {
            axios.post('http://localhost:8081/users/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                ConfirmPassword: this.ConfirmPassword
            })
                .then(response => {
                    console.log(response.data);
                    this.messages.success_msg = 'Registration successful!';
                    this.messages.error = '';
                })
                .catch(error => {
                    console.error('Error:', error);
                    this.messages.error = 'An error occurred. Please try again.';
                    this.messages.success_msg = '';
                });
        }
    }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poetsen+One&display=swap');

@media screen and (max-width: 768px) {
    .head {
        height: 100%;
    }
}

.form-box {
    width: 380px;
    height: 480px;
    position: relative;
    margin: 2% auto;
    background: #d7d7d7;
    padding: 10px;
    overflow: hidden;
    border-radius: 25px;
}

.title {
    font-family: "Poetsen One", sans-serif;
    font-style: normal;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.msg-box {
    width: 80%; /* กำหนดความกว้างของ .msg-box */
    margin: auto; /* ทำให้ .msg-box อยู่ตรงกลางของหน้าจอ */
    text-align: center; /* จัดเนื้อหาภายใน .msg-box ให้อยู่ตรงกลาง */
}

.msg {
    padding: 10px;
    font-family: sans-serif;
    color: black;
    text-align: center;
    background-color: #FA7070;
    font-size: 12px;
    border-radius: 10px;
}

.login-register {
    padding: 10px;
    font-family: sans-serif;
    text-align: center;
    
}

.login-register a {
    color: #044d0d;
    font-size: 16px;
    font-style: italic; /* ทำให้ข้อความเป็นตัวเอียง */
    text-decoration: none;
}

.login-register a:hover {
    text-decoration: underline; /* ให้มีเส้นใต้ที่ข้อความ */
}

.input-group-register .user-box {
    position: relative;
}

.input-group-register {
    left: 50px;
    margin: 0 auto;
    top: 120px;
    position: absolute;
    width: 280px;
    transition: 0.5s;
}

.input-group-register input {
    top: -30px;
    color: black;
    font-size: 15;
}

.input-group-register .user-box .input-field{
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    margin-bottom: 15px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    background: transparent;
}

.input-group-register .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px 0;
    font-size: 16px;
    color: #333333;
    pointer-events: none;
    transition: 0.5s;
}

.input-group-register .user-box input:focus ~ label,
.input-group-register .user-box input:valid ~ label {
    top: -25px;
    left: 0;
    color: #6C22A6;
    font-size: 13px;
}

.submit-btn {
    width: 85%;
    padding: 10px 30px;
    cursor: pointer;
    display: block;
    margin: auto;
    background: #F8F0E5;
    border: 0;
    outline: none;
    border-radius: 30px;
}

.submit-btn:hover {
    background: #B2A59B;
    color: white;
    box-shadow: 0 0 20px 9px #b7ada5;
}

</style>