import Quill from 'quill';
import Emotion from './emotion';
import EmojiFormat from './emoji-format';
import EmojiModule from './emoji-module';

const icons = Quill.import('ui/icons');
icons.undo =
  '<svg viewbox="0 0 18 18"><polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"/><path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"/></svg>';
icons.redo =
  '<svg viewbox="0 0 18 18"><polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"/><path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"/></svg>';

let quill;

function create(container, { options, emotions, extension }) {
  if (options.theme === 'snow') {
    new Emotion(emotions);

    Quill.register(
      {
        'formats/emoji': EmojiFormat,
        'modules/emoji': EmojiModule
      },
      true
    );

    options.modules.emoji = true;
  }

  if (extension) {
    Quill.register(extension, true);
  }

  quill = new Quill(container, options);

  return quill;
}

function destroy() {
  Emotion.clear();
}

function insert(customFormat, result) {
  const range = quill.getSelection();
  if (range) {
    if (customFormat === 'image' || customFormat === 'video') {
      quill.insertEmbed(range.index, customFormat, result, Quill.sources.USER);
    } else {
      quill.insertText(range.index, result, Quill.sources.USER);
    }
  }
}

export default {
  create,
  destroy,
  insert
};
