<template>
  <div class="card-vaga">
    <h1 class="titulo-vaga">{{ vaga.titulo }}</h1>
    <div class="info-vaga">
      <svg
        class="info-vaga-icone"
        width="22"
        height="30"
        viewBox="0 0 22 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.86952 29.3947C1.54516 17.0526 0 15.7859 0 11.25C0 5.03678 4.92485 0 11 0C17.0752 0 22 5.03678 22 11.25C22 15.7859 20.4548 17.0526 12.1305 29.3947C11.5842 30.2018 10.4157 30.2017 9.86952 29.3947ZM11 15.9375C13.5313 15.9375 15.5833 13.8388 15.5833 11.25C15.5833 8.66115 13.5313 6.5625 11 6.5625C8.46868 6.5625 6.41667 8.66115 6.41667 11.25C6.41667 13.8388 8.46868 15.9375 11 15.9375Z"
          fill="#ED3237"
        />
      </svg>

      <h2 class="info-vaga-local">{{ vaga.local }}</h2>
      <h3 class="info-vaga-filial">{{ vaga.filial }}</h3>
    </div>
    <div class="buttons-vaga">
      <button class="button-link">Saiba mais</button>
      <button class="button-primary">Inscrever-se</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardVaga",
  props: {
    vaga: {
      type: Object,
      default: () => ({
        titulo: 'Título',
        filial: 'Filial',
        local: 'Local'
      })
    }
  }
};
</script>

<style scoped>
.card-vaga {
  height: 222px;
  background: #ffffff;

  border: 0.5px solid #c7cccf;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px rgba(38, 38, 38, 0.1);
  border-radius: 12px;
  margin: 24px 0px;
  padding: 24px 32px 24px 32px;
}

.titulo-vaga {
  font-family: "Inter SemiBold";
  font-size: 24px;
  line-height: 29px;

  color: #2b2d2e;
  margin-bottom: 12px;
}
.info-vaga {
  display: grid;
  grid-template-columns: 35px;
  grid-template-rows: 20px;

  margin-top: 30px;
}
.info-vaga-icone {
  grid-column: 1;
  justify-self: left;
  margin-top: 2px;
}
.info-vaga-local {
  font-family: "Inter SemiBold";
  font-size: 16px;
  line-height: 16px;

  letter-spacing: 0.0015em;

  color: #787b7d;

  grid-column: 2;
  align-self: center;
  justify-self: start;
}
.info-vaga-filial {
  font-size: 14px;
  line-height: 14px;

  letter-spacing: 0.001em;

  color: #787b7d;

  grid-column: 2;
  justify-self: start;
}
.buttons-vaga {
  display: inline-block;
  float: right;
  margin-top: 20px;
}
.button-primary {
  flex: 1;
}
.button-link {
  flex: 1;
}
@media only screen and (max-width: 600px) {
  .buttons-vaga {
    margin-right: 15px;
  }
  .button-primary {
    font-size: 14px;
    line-height: 12px;
  }
  .button-link {
    font-size: 14px;
  }
}
</style>
