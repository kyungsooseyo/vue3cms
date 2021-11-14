const rules = {
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      pattern:
        /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  identifyingCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6}$/,
      message: '请输入正确的验证码',
      trigger: 'blur'
    }
  ]
};
export { rules };
