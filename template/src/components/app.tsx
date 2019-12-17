import { Component, h } from "preact";

export default class App extends Component {
    public render() {
        return (
            <div class="py-20" style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)">
                <div class="container mx-auto px-6">
                    <h1 class="text-4xl font-bold mb-2 text-white">
                        Preact-cli + Tailwind!
                    </h1>
                    <div class="text-2xl mb-8 text-gray-200">
                        <p>
                            You're all set with tailwind. Now go ahead and build
                            something cool! 😍
                        </p>
                    </div>
                    <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                        Button
                    </button>
                </div>
            </div>
        );
    }
}
