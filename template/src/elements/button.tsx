import { h, RenderableProps } from "preact";

export default function Button(props: RenderableProps<{}>) {
  return (
    <div>
      <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
        {props.children}
      </button>
    </div>
  );
}
