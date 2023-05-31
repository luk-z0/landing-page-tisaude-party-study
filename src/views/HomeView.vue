<script>
import background from "../assets/images/background.jpeg"
import brand from "../assets/images/brand.png"

  export default (await import('vue')).defineComponent({
    data(){
      return {
        background,
        brand
      }
    }
  })



</script>

<template>
  <div>
    <header>
      <div class="line-contact">
        <div class="container flex justify-content-between">
          <div class="contacts">
            <p>
              <font-awesome-icon class="top-icons" icon="fa-solid fa-phone" /> 3373-2369
            </p>
            <p>
              <font-awesome-icon class="top-icons" icon="fa-solid fa-envelope" /> kleryston@mail.com
            </p>
            <p>
              <font-awesome-icon class="top-icons" icon="fa-solid fa-location-dot" />Rua Mariz de Barro
            </p>
          </div>
          <div class="social-media">
            <font-awesome-icon class="top-icons" :icon="['fab', 'square-facebook']" />
            <font-awesome-icon class="top-icons" :icon="['fab', 'square-twitter']" />
            <font-awesome-icon class="top-icons" :icon="['fab', 'linkedin']" />
            <font-awesome-icon class="top-icons" :icon="['fab', 'square-instagram']" />
          </div>
        </div>
      </div>
      <div class="container flex justify-content-between">
        <div class="brand">
          <img :src="brand" alt="brand">
        </div>
        <nav>
          <ul class="flex menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </div>
      
    </header>
    <main>
      <div class="background-header" :style="'background-image:url('+background+')'">
        <div class="shadow">
          <div class="container-banner flex justify-content-center">
            <div class="container">
              <div class="row flex flex-wrap">
                <div class="col-lg-6 flex flex-direction-column justify-content-center tc-white p-10">
                  <h1 class="fs-45">Cuidados de saúde excepcionais para todos</h1>
                  <p class="t-margin-0">Em um dado instante, tudo o que o cirurgião sabe de repente se torna importante para a solução do problema. Você não pode fazer isso uma hora depois ou amanhã. Você também não pode ir à biblioteca e pesquisar</p>
                  <div class="flex t-margin-3">
                    <button class="btn-solid-white r-margin-3">Agendamentos</button>
                    <button class="btn-solid-inline">Saiba Mais</button>
                  </div>
                </div>
                <div class="col-lg-6">
                </div>
              </div>                              
            </div>
          </div>
        </div>
      </div>
      <div class="container flex box-shadow-1 border-radius-10 -t-margin-80 bg-white">
        <div class="box-header flex justify-content-around flex-direction-column text-center">
          <font-awesome-icon class="fs-20 tc-purple" icon="fa-solid fa-house-chimney-medical" />
          <h2 class="tc-purple">850</h2>
          <p class="fw-bold">Leitos</p>
        </div>
        <div class="box-header flex justify-content-around flex-direction-column text-center">
          <font-awesome-icon class="fs-20 tc-purple" icon="fa-solid fa-people-group" />
          <h2 class="tc-purple">12000+</h2>
          <p class="fw-bold">Pacientes Satisfeitos</p>
        </div>
        <div class="box-header flex justify-content-around flex-direction-column text-center">
          <font-awesome-icon class="fs-20 tc-purple" icon="fa-solid fa-user-doctor" />
          <h2 class="tc-purple">520</h2>
          <p class="fw-bold">Médicos</p>
        </div>
        <div class="box-header flex justify-content-around flex-direction-column text-center">
          <font-awesome-icon class="fs-20 tc-purple" icon="fa-solid fa-award" />
          <h2 class="tc-purple">32</h2>
          <p class="fw-bold">Certificações</p>
        </div>
      </div>
      <div class="container t-margin-50">
        <div class="row flex flex-wrap">
          <div class="col-lg-6 flex flex-direction-column justify-content-center" style="background-color: #999">
            coluna 1
          </div>
          <div class="col-lg-6 flex flex-direction-column justify-content-center" style="background-color: #ccc">
            coluna 2
          </div>
        </div>
      </div>

    </main>

    <footer>

    </footer>
  </div>
</template>
