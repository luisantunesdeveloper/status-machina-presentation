import StateMachine from "status-machina";

export const stores = {};

export const CanvasStoreInitData = {
  slides: [
    {
      description: "What's a state machine?"
    },
    {
      description:
        "a device that can be in one of a set number of stable conditions depending on its previous condition and on the present values of its inputs"
    },
    {
      description: "Types of state machines?"
    },
    {
      description: "Shit hit the fan"
    }
  ],
  currentSlide: 0
};

export const CanvasStore = () => {
  const config = {
    display: {
      next: {},
      previous: {},
      on: {
        outputs: data =>
          new Promise(resolve => {
            resolve(data);
          })
      }
    },
    next: {
      display: {},
      on: {
        outputs: data =>
          new Promise(resolve => {
            data.currentSlide = ++data.currentSlide;
            resolve(data);
          })
      }
    },
    previous: {
      display: {},
      on: {
        outputs: data =>
          new Promise(resolve => {
            data.currentSlide = --data.currentSlide;
            resolve(data);
          })
      }
    }
  };

  const store = new StateMachine();
  store.configMoore(config)("display");
  return store;
};
