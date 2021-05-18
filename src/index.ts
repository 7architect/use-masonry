import { nextTick } from 'vue'
import Masonry from 'masonry-layout'

type Options = {
    gutter?: number | string;
    columnWidth?: number | string;
    itemSelector?: string;
    percentPosition?: boolean;
    horizontalOrder?: boolean;
    fitWidth?: boolean;
    originLeft?: boolean;
    originTop?: boolean;
    resize: boolean;
    initLayout: boolean;
    stamp?: string;
    containerStyle?: object | null;
    transitionDuration: number | string;
    stagger: number;
}

export const useMasonry = (target: HTMLElement, options: Options): Masonry => {
    const masonry = new Masonry(target, options)
    const draw = () => {
        masonry.reloadItems()
        masonry.layout()
    }

    nextTick(draw)

    return { masonry }
}
