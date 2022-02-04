class FormValidator {
  constructor() {
    this.inputs = {};
    this.errorMessages = {};
  }

  getStatus() {
    return this.inputs;
  }

  validate(field, value) {
    this.inputs[field] = { value: value, error: "" };
    if (value === "") {
      this.inputs[field].error = "É necessário preencher este campo";
      return false;
    }

    switch (field) {
      case "email":
        if (
          !String(value)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
          this.inputs[field].error = "Email inválido";
          return false;
        }
        break;

      case "password":
        if (
          !String(value)
            .toLowerCase()
            .match(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
            )
        ) {
          this.inputs[field].error =
            "A senha deve conter no mínimo 8 caracteres, pelo menos 1 letra, 1 número e 1 símbolo";
          return false;
        }
        break;

      case "confirmPassword":
        if (value !== this.inputs["password"]?.value) {
          this.inputs[field].error = "As senhas não conferem";

          return false;
        }
        break;

      default:
    }
  }
}

export default FormValidator;
