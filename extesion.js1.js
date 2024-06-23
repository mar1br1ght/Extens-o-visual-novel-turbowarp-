class VisualNovelExtension {
  getInfo() {
    return {
      id: 'visualnovel',
      name: 'Visual Novel',
      blocks: [
        {
          opcode: 'showMessage',
          blockType: Scratch.BlockType.COMMAND,
          text: 'show message [MESSAGE] with character [CHARACTER]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello, world!'
            },
            CHARACTER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Character'
            }
          }
        },
        {
          opcode: 'chooseOption',
          blockType: Scratch.BlockType.COMMAND,
          text: 'choose option [OPTION1] or [OPTION2]',
          arguments: {
            OPTION1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Option 1'
            },
            OPTION2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Option 2'
            }
          }
        }
      ]
    };
  }

  showMessage(args) {
    const message = args.MESSAGE;
    const character = args.CHARACTER;
    // Implementação para mostrar a mensagem na tela
    console.log(`Character: ${character}, Message: ${message}`);
  }

  chooseOption(args) {
    const option1 = args.OPTION1;
    const option2 = args.OPTION2;
    // Implementação para mostrar as opções e lidar com a escolha
    console.log(`Option 1: ${option1}, Option 2: ${option2}`);
  }
}

Scratch.extensions.register(new VisualNovelExtension());


