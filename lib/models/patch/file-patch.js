import Patch, {nullPatch} from './patch';
  isPresent() {
    return this.oldFile.isPresent() || this.newFile.isPresent() || this.patch.isPresent();
  }

  getMaxLineNumberWidth() {
    return this.getPatch().getMaxLineNumberWidth();
  }

    if (!this.isPresent()) {
      return '';
    }


export const nullFilePatch = new FilePatch(nullFile, nullFile, nullPatch);