import StateMachine from "status-machina";

export const stores = {};

export const SlidesStoreInitData = {
  slides: [
    {
      description: "What's a state machine?"
    },
    {
      description: "A system can be in one"
    },
    {
      description: "of a set number of stable conditions"
    },
    {
      description: "depending on its previous condition"
    },
    {
      description: "and on the present values of its inputs"
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
    },
    {
      description: "Demo time"
    },
    {
      description: "Obs: Demo and Presentation powered by: status-machina"
    },
    {
      description: "https://github.com/luisantunesdeveloper/status-machina"
    },
    {
      description: "Demo 1: Todo app"
    },
    {
      description: "Demo 2: Presentation app"
    },
    {
      description: "Thanks"
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
