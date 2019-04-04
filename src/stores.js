import StateMachine from "status-machina";

export const stores = {};

export const SlidesStoreInitData = {
  slides: [
    {
      description: "What's a state machine?"
    },
    {
      description:
        "A device that can be in one of a set number of stable conditions depending on its previous condition and on the present values of its inputs"
    },
    {
      description: "Types of state machines?"
    },
    {
      description: "Moore"
    },
    {
      description: "Output values are determined by it's current state"
    },
    {
      description: "Mealy"
    },
    {
      description: "Output values are determined in the transitions"
    },
    {
      description: "Harel State Charts"
    },
    {
      description: "It's a state machine on steroids"
    },
    {
      description: "Behaviour is decoupled, thus better testing and reasoning"
    },
    {
      description: "Logic well understandable by non tech people"
    },
    {
      description: "https://statecharts.github.io/"
    }
  ],
  currentSlide: 0
};

export const SlidesStore = () => {
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
