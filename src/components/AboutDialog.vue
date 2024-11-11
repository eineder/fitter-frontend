<template>
    <div>
        <button @click="toggle" class="mt-4 text-blue-500 hover:underline focus:outline-none">
            {{ buttonText }}
        </button>
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 class="text-lg text-blue font-semibold">Hi! 👋</h2>
                <p style="text-align: justify;" class="mt-2 text-blue text-sm">My name is Max Eineder. I
                    work
                    as a software developer
                    and project manager. My current job mostly involves on-prem web applications. However, since I was
                    curious about how serverless works, I started this project - a Twitter clone based on AWS Serverless
                    technologies such as Dynamo DB, Lambda and App Sync. It is based on Yan Cui's excellent course
                    AppSync Masterclass (https://appsyncmasterclass.com) and I have expanded it to include a few
                    aspects that I find interesting.
                </p>
                <div class="mt-4">
                    <button @click="toggle" style="width: 200px;"
                        class="rounded-full bg-blue font-bold text-lg text-white mt-4 p-3 hover:bg-darkblue">
                        Got it!
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutDialog',
    props: {
        buttonText: {
            type: String,
            default: 'Learn More'
        }
    },
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        },
        handleBackdropClick(event) {
            if (event.target === event.currentTarget) {
                this.isOpen = false;
            }
        }
    }
};
</script>
