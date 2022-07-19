/**
 * @name DayCycleDiscord
 * @author v37ga
 * @description changes your wallpaper depending on what time is it.
 * @version 2.0
 * @invite inviteCode
 * @authorId 368194347222695938
 * @authorLink https://twitter.com/veigaffa
 * @website https://FabioV37ga.github.io/DayCycleDiscord/
 * @source https://github.com/FabioV37ga/DayCycleDiscord/
 */

module.exports = class DayCycleDiscord {
  load() { }

  start() {

    const imagemManha = 'https://wallpapercave.com/wp/wp3461372.jpg'
    const imagemTarde = 'https://wallpapercave.com/wp/wp4676613.png'
    const imagemNoite = 'https://wallpapercave.com/wp/wp4676574.jpg'



    class Relogio {
      static hora_atual;
      static periodo_atual;

      static setPeriodo() {
        if (this.hora_atual >= 6 && this.hora_atual < 12) this.periodo_atual = "manha";
        else if (this.hora_atual >= 12 && this.hora_atual < 18) this.periodo_atual = "tarde";
        else if (this.hora_atual >= 18 || this.hora_atual < 6) this.periodo_atual = "noite";
        Janela.atualizar()
      }

      static getHorario() {
        this.hora_atual = new Date().getHours()
        this.setPeriodo()
      }

      static temporizador() {
        var intervalo = setInterval(() => {
          this.getHorario()
        }, 5000);
      }
    }



    class Janela {
      static fundo = document.querySelector('body');
      static periodo_anterior = "";

      static atualizar() {
        if (this.periodo_anterior != Relogio.periodo_atual) {

          this.periodo_anterior = Relogio.periodo_atual;

          switch (this.periodo_anterior) {
            case "manha":
              Janela.fundo.style = `background-image: url(${imagemManha}) !important`
              break;
            case "tarde":
              Janela.fundo.style = `background-image: url(${imagemTarde}) !important`
              break;
            case "noite":
              Janela.fundo.style = `background-image: url(${imagemNoite}) !important`
              break;
          }
        }
      }
    }



    Relogio.getHorario()
    Relogio.temporizador()
    console.log(`[DAYCYCLEDISCORD]\n → Horário Atual ${Relogio.hora_atual}\n → Período Atual: ${Relogio.periodo_atual}`)


  }
  stop() { }
  observer(changes) { }
}