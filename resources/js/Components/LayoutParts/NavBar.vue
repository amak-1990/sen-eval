<script setup>

import {Link, usePage} from '@inertiajs/vue3';
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";
import {ChevronDownIcon, UserIcon} from "@heroicons/vue/20/solid/index.js";
import {Bars3Icon, BellIcon, MoonIcon, SunIcon} from "@heroicons/vue/24/outline/index.js";
import {theme} from "@/theme.js";
import {computed} from "vue";

defineEmits(['openSidebar']);

const user = computed(() => usePage().props.auth.user);

const userNavigation = [
    {name: 'Mon profil', href: route('profile.index')},
]

const changeTheme = (t) => {
    theme.setTheme(t)
    document.getElementById('root-tag').className = t;
}

</script>

<template>
    <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-dark-gray bg-white dark:bg-grayish px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button class="-m-2.5 p-2.5 text-gray-700 dark:text-white lg:hidden" type="button" @click="$emit('openSidebar')">
            <span class="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" class="h-6 w-6"/>
        </button>
        <div aria-hidden="true" class="h-6 w-px bg-gray-900/10 lg:hidden"/>
        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div class="relative flex flex-1 items-center">
            </div>
            <div class="flex items-center gap-x-4 lg:gap-x-6">
                <button v-if="theme.dark" class="-m-2.5 p-2.5 text-gray-100 hover:text-gray-500 " type="button" @click="changeTheme('light')">
                    <span class="sr-only">View notifications</span>
                    <SunIcon aria-hidden="true" class="h-6 w-6"/>
                </button>
                <button v-else class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500" type="button" @click="changeTheme('dark')">
                    <span class="sr-only">View notifications</span>
                    <MoonIcon aria-hidden="true" class="h-6 w-6"/>
                </button>
                <button class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 dark:text-gray-100" type="button">
                    <span class="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" class="h-6 w-6"/>
                </button>
                <div aria-hidden="true" class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"/>
                <Menu as="div" class="relative">
                    <MenuButton class="-m-1.5 flex items-center p-1.5">
                        <span class="sr-only">Open user menu</span>
                        <UserIcon class="ml-2 h-6 w-6 rounded-full bg-gray-50 text-gray-400"/>
                        <span class="hidden lg:flex lg:items-center">
                        <span aria-hidden="true" class="ml-4 text-sm font-semibold leading-6 text-gray-900 dark:text-white">{{ user.user_display_name }}</span>
                            <ChevronDownIcon aria-hidden="true" class="ml-2 h-5 w-5 text-gray-400"/>
                        </span>
                    </MenuButton>
                    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                        <MenuItems
                            class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white dark:bg-grayish py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                            <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                <Link :class="[active ? 'bg-cyan-600  text-white' : 'text-gray-900 dark:text-white', 'block px-3 py-1 text-sm leading-6 cursor-pointer']"
                                      :href="item.href"
                                      as="span">
                                    {{ item.name }}
                                </Link>
                            </MenuItem>
                            <MenuItem v-slot="{active}">
                                <Link :class="[active ? 'bg-cyan-600  text-white' : 'text-gray-900 dark:text-white', 'block px-3 py-1 text-sm leading-6 cursor-pointer']"
                                      :href="route('logout')"
                                      as="span" method="post">
                                    Déconnexion
                                </Link>
                            </MenuItem>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </div>
    </div>
</template>

