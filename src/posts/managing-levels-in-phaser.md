---
path: "/blog/managing-levels-in-phaser-2"
date: "2018-09-10"
title: "Managing Levels in Phaser 2"
category: "web"
---

When I first began to use Phaser 2, I had trouble wrapping my head around the way that "levels", stages", or "scenes" (like in Unity) were created and accessed. I was looking in the documentation for some kind of Level Manager or methods that would allow me to load said scenes but came up short.

The reason I was getting tripped up, is due to the [official tutorials](https://phaser.io/tutorials/making-your-first-phaser-2-game) way of creating the `Phaser.Game` object.

When the game configuration object is created, another object is passed into it containing three methods, the `preload`, `create`, and `update` methods. These are essentially Phasers "life cycle" methods that tell the engine what should happen during each of these phases.

In order to use more than one scene, just simply omit this object and instead add your scenes using the game state `add` method.

For example, if we want to have a start screen state, main game state, and end scene state, we would add these three states like so:

```javascript
// Some comment
const game = new Phaser.Game(config);
game.state.add('gameState', gameState);
game.state.add('endState', endState);
game.state.add('titleState', titleState);
```

Each state will have its own respective `preload`, `create`, and `update` methods that will get executed automatically. Note that the order in which these states are added *does* seem to matter. In order for you to change from the start state to the game state for example, you will need to add the game state *first* or else Phaser won't know that it exists.

To specify which state will start when the game is loaded, simply call the `state.start` method, passing the state you want to load as the only argument.

```javascript
game.state.start('titleState');
```

Lastly, when you want to load a new state you simply call the same method. For example if I want the game state to load after the user presses the `spacebar` key on the title screen, I would add this logic into the `titleScene` `update` method.

```javascript
function update() {
    const { game } = this;

    if (game.input.keyboard.isDown(Phaser.keyCode.SPACEBAR)) {
        game.state.start('gameState');
    }
}
```

There you have it, a simple explanation of how Phaser 2 handles game states.
