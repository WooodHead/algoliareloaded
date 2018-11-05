const INITIAL_STATE = [
    {
      title: "How LeBron James' new public school is the first of its kind.",
      url: "https://www.sbnation.com/platform/amp/2018/7/31/17634370/lebron-james-school-akron-i-promise-different",
      author: "Jordan Walke",
      num_comments: 454,
      points: 602,
      objectID: 0,
    },
    {
      title: "Elon Musk on How to Build the Future.",
      url: "https://www.ycombinator.com/future/elon/",
      author: "Jared Friedman",
      num_comments: 513,
      points: 1106,
      objectID: 1,
    },
  ];

   const articleReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      default:
        return state;
    }
  };

   export default articleReducer;