function print(a) {
  console.log(a);
}

const saudacao = () => {
  print("Olá");
  var data = new Date();
  print(
    data.getHours() < 12
      ? "Bom dia"
      : data.getHours() < 18
      ? "Boa Tarde"
      : "Boa Noite"
  );
};

saudacao();

console.log();


 