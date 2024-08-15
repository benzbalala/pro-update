<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/dist/jquery.Thailand.min.css"
    />
  </head>

  <div id="form-container">
    <div class="upload-container">
      <span>รูปภาพสินค้า</span>
      <div id="images-container">
        <div v-for="(image, index) in images" :key="index" class="image-wrapper">
          <img :src="image.src" :alt="'Uploaded Image ' + (index + 1)" />
          <span class="remove-icon" @click="removeImage(index)">&#x2716;</span>
        </div>
      </div>
      <label class="upload-icon">
        <i class="fa-solid fa-image" @click="openFileInput"></i>
        <input
          type="file"
          ref="fileInput"
          accept="image/*"
          @change="handleFileUpload"
          multiple
          style="display: none"
        />
      </label>
    </div>

    <div class="name-product">
      <span>ชื่อสินค้า</span>
      <textarea
        v-model="nameProduct"
        placeholder="ชื่อสินค้า"
        @input="adjustTextareaHeight($event.target)"
      ></textarea>
    </div>

    <div class="category-name">
      <span>หมวดหมู่</span>
      <select v-model="category" ref="category">
        <option value="เสื้อผ้า">เสื้อผ้า</option>
        <option value="กระเป๋า">กระเป๋า</option>
        <option value="รองเท้า">รองเท้า</option>
        <option value="เครื่องประดับ">เครื่องประดับ</option>
        <option value="ของใช้ภายในบ้าน">ของใช้ภายในบ้าน</option>
        <option value="อาหารเครื่องดื่ม">อาหารเครื่องดื่ม</option>
        <option value="งานฝีมือ">งานฝีมือ</option>
        <option value="ความงาม">ความงาม</option>
      </select>
    </div>

    <div class="details">
      <span>รายละเอียดสินค้า</span>
      <textarea
        v-model="productDetails"
        placeholder="รายละเอียดต่างๆ ของสินค้า"
        @input="adjustTextareaHeight($event.target)"
      ></textarea>
    </div>

    <div class="input-container">
      <span>ประเภทสินค้า</span>
      <div v-for="(set, index) in productTypes" :key="index" class="input-group">
        <div class="input-with-icon">
          <input
            v-model="set.productType1"
            type="text"
            class="product-type"
            placeholder="ประเภท เช่น สี"
          />
          <input
            v-model="set.inputProductType1"
            type="text"
            class="input-product-type"
            placeholder="ฟ้า/ชมพู/ส้ม/เขียว เป็นต้น"
          />
        </div>
        <div class="input-with-icon">
          <input
            v-model="set.productType2"
            type="text"
            class="product-type"
            placeholder="ประเภท เช่น ขนาด"
          />
          <input
            v-model="set.inputProductType2"
            type="text"
            class="input-product-type"
            placeholder="25 ซม./30 มม./5 นิ้ว/1 เมตร เป็นต้น"
          />
        </div>
        <div class="input-price">
          <input
            v-model="set.price"
            type="number"
            class="price"
            placeholder="ราคาสินค้า"
          />
        </div>
        <div class="input-number-products">
          <input
            v-model="set.numberProducts"
            type="number"
            class="number-products"
            placeholder="จำนวนสินค้า"
          />
        </div>
        <span class="delete-set-icon" @click="deleteInputSet(index)">
          <i class="fa-solid fa-minus" id="delete-set"></i>
        </span>
      </div>
      <div style="text-align: center; margin-top: 20px">
        <a class="add-set-icon" @click="addInputSet()">
          <i class="fa-solid fa-circle-plus" id="add-set"></i>
        </a>
      </div>
    </div>

    <div>
      <p id="form-selling1-error" class="error-message" v-show="formError">
        กรุณากรอกข้อมูลให้ครบถ้วน
      </p>
    </div>

    <div class="btn-container">
      <router-link to="/users/home-login">
        <button type="button" class="btn-back">ยกเลิก</button>
      </router-link>
      <button type="button" class="btn" @click="saveProductData">ถัดไป</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      nameProduct: "",
      category: "เสื้อผ้า",
      productDetails: "",
      productTypes: [
        {
          productType1: "",
          inputProductType1: "",
          productType2: "",
          inputProductType2: "",
          price: "",
          numberProducts: "",
        },
      ],
      formError: false,
    };
  },
  methods: {
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const files = event.target.files;
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.images.push({
            id: `image${this.images.length + 1}`,
            src: e.target.result,
          });
        };
        reader.readAsDataURL(file);
      }
      event.target.value = ""; // Reset the input field to allow uploading the same file again
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
    addInputSet() {
      this.productTypes.push({
        productType1: "",
        inputProductType1: "",
        productType2: "",
        inputProductType2: "",
        price: "",
        numberProducts: "",
      });
    },
    deleteInputSet(index) {
      this.productTypes.splice(index, 1);
    },
    adjustTextareaHeight(textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + 2 + "px";
    },
    prepareData() {
      const formData = {
        images: this.images.map(img => ({ src: img.src })),
        nameProduct: this.nameProduct,
        category: this.category,
        productDetails: this.productDetails,
        productTypes: this.productTypes.map(pt => ({
          productType1: pt.productType1,
          inputProductType1: pt.inputProductType1,
          productType2: pt.productType2,
          inputProductType2: pt.inputProductType2,
          price: pt.price,
          numberProducts: pt.numberProducts,
        })),
      };
      return formData;
    },
    saveProductData() {
      const formData = this.prepareData();
      const jsonData = JSON.stringify(formData, null, 2);
      
      // Here you can save `jsonData` to a file or send it to a server
      // For demonstration, let's log it to console
      console.log(jsonData);
      
      // Optionally, you can save it to a file using Node.js File System API
      // Example:
      // import fs from 'fs';
      // fs.writeFileSync('product.json', jsonData);

      // Reset form after saving
      this.resetForm();
    },
    resetForm() {
      this.images = [];
      this.nameProduct = "";
      this.category = "เสื้อผ้า";
      this.productDetails = "";
      this.productTypes = [
        {
          productType1: "",
          inputProductType1: "",
          productType2: "",
          inputProductType2: "",
          price: "",
          numberProducts: "",
        },
      ];
      this.formError = false;
    },
  }
};
</script>
  
<style scoped>
#form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  #form-containert {
    width: 90%; /* Adjust width for smaller screens */
  }
}

.upload-container,
.category-name,
.input-container,
.details,
.name-product {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;
  margin: 1% auto; /* เปลี่ยน margin เป็น auto ที่เหลือเอาออก */
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 80%; /* ปรับความกว้างให้กล่องเป็นเดิมเก่า */
}

.image-wrapper {
  position: relative;
  display: inline-block;
  margin: 10px;
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 8px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

textarea {
  font-size: 18px;
  width: 40%;
  resize: none; /* ปิดการปรับขนาด textarea โดยไม่จำเป็น */
}

.remove-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.remove-icon:hover {
  background: rgba(255, 72, 72, 0.5);
}

.upload-icon {
  font-size: 50px;
  color: #d1bb9e;
  cursor: pointer;
  margin-bottom: 20px;
}

.upload-icon:hover {
  color: #a79277;
}

#image-upload {
  display: none;
}

.upload-container span,
.details span,
.input-container span,
.category-name span,
.name-product span {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 20px;
  color: #000000;
}

.input-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.input-with-icon,
.input-price,
.number-products {
  display: flex;
  align-items: center;
  position: relative;
  min-width: 200px;
}

.product-type,
.input-product-type,
.price,
.number-products {
  font-size: 1rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%; /* ปรับขนาด input ให้เต็มกว่า */
}

.add-set-icon {
  cursor: pointer;
  font-size: 30px;
  user-select: none;
  color: #d1bb9e;
  margin-top: 20px; /* เพิ่มระยะห่างด้านบน */
}

#delete-set {
  padding: 20px;
  cursor: pointer;
}

#delete-set:hover {
  color: red;
}

.add-set-icon:hover {
  color: #a79277;
}

#product-details,
#nameProduct {
  height: auto;
  box-sizing: border-box;
  width: 60%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  overflow-wrap: auto;
}

#category,
#category option {
  width: 150px;
  padding: 5px;
  font-size: 15px;
  cursor: pointer;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* เพิ่มระยะห่างด้านบน */
  margin: 30px;
}

.btn-back,
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  width: 100px;
  font-size: 17px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: none;
}

.btn-back {
  background-color: #dfdfdf;
  color: rgb(0, 0, 0);
  margin-right: 10px; /* ระยะห่างด้านขวาของปุ่ม .btn-back */
}

.btn {
  background-color: #e9caab;
  color: rgb(0, 0, 0);
  margin-left: 10px; /* ระยะห่างด้านซ้ายของปุ่ม .btn */
}

.btn-back:hover {
  color: #ffffff;
  background-color: #e88e97;
}

.btn:hover {
  color: #ffffff;
  background-color: #b99470;
}

.error-message {
  text-align: center;
  color: red;
  display: none;
}
</style>
  