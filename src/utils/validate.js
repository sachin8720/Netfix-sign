

export const CheckValidDate = (email, password) => {
    const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const isPasswordValid =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if(!isEmailValid) return "Email Id Is Not Valide";
    if(!isPasswordValid) return "Password Id Is Not Valide";
    return null;
  
};

 