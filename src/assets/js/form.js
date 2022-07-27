const inputs = Array.from(document.getElementsByClassName('char_input'));
const seePassIcons = Array.from(
  document.getElementsByClassName('see_Password')
);
const rememberMeInputs = document.getElementsByClassName('remember_input');
const signupForm = document.getElementById('signup__form');
const loginForm = document.getElementById('login__form');
const showSignUpBtn = document.getElementById('sign_up_ct_link');
const showLoginBtn = document.getElementById('login_ct_link');
const passWordStatus = document.getElementById('password_status');
const audio = document.getElementsByTagName('audio').item(0);
const audio_btn = document.getElementById('sound_effect_button');
//enable tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
//enable tooltip
// particle effect
particlesJS('particles-js', {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
      onclick: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
// particle effect
// turn on and off the sound effect
audio_btn.addEventListener('click', function () {
  if (!this.classList.contains('disable')) {
    this.classList.remove('pulse');
    this.classList.add('disable', 'text-danger', 'bg-transparent');
    this.firstChild.classList.add('fa-volume-xmark');
    audio.muted = true;
  } else {
    this.classList.remove('disable', 'text-danger', 'bg-transparent');
    this.firstChild.classList.remove('fa-volume-xmark');
    audio.muted = false;
  }
});
// turn on and off the sound effect
// audio actions
window.addEventListener('load', function () {
  audio.play();
  audio.loop = true;
});
// audio actions

// input label animation & emptiness check
inputs.forEach((input) => {
  input.addEventListener('blur', function () {
    passWordStatus.hidden = true;
    if (this.value !== '') {
      this.nextElementSibling.classList.add('filled');
      this.parentElement.lastElementChild.hidden = true;
      this.style.borderColor = '#404040';
    } else {
      this.parentElement.lastElementChild.hidden = false;
      this.parentElement.lastElementChild.style.color = '#e13a5a';
      const tooltip = new bootstrap.Tooltip(
        this.parentElement.lastElementChild,
        {
          title: 'the value is empty !😑',
          placement: 'right',
          customClass: 'custom_tooltip',
        }
      );
      this.style.borderColor = '#e13a5a';
      this.nextElementSibling.classList.remove('filled');
    }
  });
  //   
  input.addEventListener('focus', function () {
    if(this.type === 'password'){
        if (this.value.length > 0) passWordStatus.hidden = false;
        else passWordStatus.hidden = true;
    }
    this.parentElement.lastElementChild.hidden = true;
    this.style.borderColor = 'peru';
  });
  if (input.type === 'password') {
    input.addEventListener('input', function () {
        passWordStatus.hidden = false;
      if (input.value.length > 0 && input.value.length < 8) {
        passWordStatus.style.color = '#fd7e14';
        passWordStatus.innerHTML =
          'password is weak <i class="fa-solid fa-circle-exclamation"></i>';
      } else if (input.value.length >= 8) {
        passWordStatus.innerHTML ='password is strong 💪';
          passWordStatus.style.color = '#90ee90';
      } else {
        passWordStatus.hidden = true;
      }
    });
  }
});
// show & hide password
seePassIcons.forEach((seePassIcon) => {
  seePassIcon.addEventListener('click', function () {
    if (this.classList.contains('fa-eye-slash')) {
      this.nextElementSibling.type = 'password';
      this.classList.remove('fa-eye-slash');
    } else {
      this.nextElementSibling.type = 'text';
      this.classList.add('fa-eye-slash');
    }
  });
});
// show & hide password

// form animations
showSignUpBtn.addEventListener('click', function (e) {
  e.preventDefault();
  loginForm.classList.add('animate__fadeOut');
  signupForm.classList.remove('animate__backOutUp');
  signupForm.classList.add('animate__backInDown');
  signupForm.style.zIndex = 2;
  signupForm.style.transform = 'translateY(0)';
});
showLoginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  signupForm.classList.add('animate__backOutUp');
  loginForm.classList.remove('animate__fadeOut');
  loginForm.classList.add('animate__fadeIn');
});
// form animations
