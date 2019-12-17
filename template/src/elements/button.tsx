import { h, RenderableProps } from "preact";

export default function Button(props: RenderableProps<{}>) {
  return (
    <div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {props.children}
      </button>
    </div>
  );
}
