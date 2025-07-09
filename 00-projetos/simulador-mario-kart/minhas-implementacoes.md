## Minhas implementações do projeto: Simulador de Corridas do Mario Kart 🏎

### Autor do projeto: Felipão da DIO

### Bootcamp: meutudo - Mobile Developer 📱

#### 1) Uso de um método para capturar a escolha do usuário:

```
//método para receber a escolha do personagem usando o input do usuário.
const lerdados = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

#### 2) Criação de uma função recursiva para que seja escolhido o personagem disponível e se não for um válido, executar novamente até chegar a um personagem válido
