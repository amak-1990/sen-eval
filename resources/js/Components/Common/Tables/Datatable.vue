<script setup>
	import {ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon} from '@heroicons/vue/20/solid/index.js';
	import {Link} from '@inertiajs/vue3';

	defineProps({
		pagination: Object,
		modelValue: {
			type: String,
			required: true,
		},
		search: {
			type: Boolean,
			default: true,
		},
	});

	defineEmits(['update:modelValue']);
</script>
<template>
	<div class="mt-8 shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
		<div v-if="search" class="border-b border-gray-200 dark:border-black bg-white dark:bg-grayish px-4 py-5 sm:px-6">
			<form class="relative flex flex-1">
				<label class="sr-only" for="search-field">Recherche</label>
				<MagnifyingGlassIcon
					aria-hidden="true"
					class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400" />
				<input
					:value="modelValue"
					class="bg-white dark:bg-grayish block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm"
					name="search"
					placeholder="Recherche..."
					type="search"
					@input="$emit('update:modelValue', $event.target.value)" />
			</form>
		</div>
		<div class="overflow-y-scroll">
			<slot />
		</div>
		<div
			class="flex items-center justify-between border-t border-gray-200 dark:border-black bg-white dark:bg-grayish px-4 py-3 sm:px-6">
			<template v-if="!modelValue">
				<div class="flex flex-1 justify-between sm:hidden">
					<template v-for="link in pagination.links">
						<Link
							v-if="link.label === 'p'"
							:key="link.label"
							:href="link.url ? link.url : '#'"
							class="relative inline-flex items-center rounded-md border border-gray-300 dark:border-grayish bg-white dark:bg-grayish px-4 py-2 text-sm font-medium text-gray-700 dark:text-white hover:bg-cyan-700 hover:text-white"
							>Précédent
						</Link>
						<Link
							v-if="link.label === 'n'"
							:key="link.label"
							:href="link.url ? link.url : '#'"
							class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 dark:border-grayish bg-white dark:bg-grayish px-4 py-2 text-sm font-medium text-gray-700 dark:text-white hover:bg-cyan-700 hover:text-white"
							>Suivant
						</Link>
					</template>
				</div>
				<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
					<div>
						<p class="text-sm text-gray-700 dark:text-white">
							Élement(s)

							<span class="font-medium">{{ pagination.from }}</span>

							à

							<span class="font-medium">{{ pagination.to }}</span>

							de

							<span class="font-medium">{{ pagination.total }}</span>

							résultats
						</p>
					</div>
					<div>
						<nav aria-label="Pagination" class="isolate inline-flex -space-x-px rounded-md shadow-sm">
							<template v-for="link in pagination.links">
								<Link
									v-if="link.label === 'p'"
									:key="link.label"
									:href="link.url ? link.url : '#'"
									class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-black hover:bg-cyan-700 hover:text-white focus:outline-offset-0">
									<span class="sr-only"><ChevronLeftIcon aria-hidden="true" class="h-5 w-5" /></span>
									<ChevronLeftIcon aria-hidden="true" class="h-5 w-5" />
								</Link>
								<!-- Current: "z-10 bg-cyan-600  text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600", Default: "" -->
								<Link
									v-if="link.label !== 'p' && link.label !== 'n'"
									:key="link.label"
									:class="
										link.active
											? 'z-10 bg-cyan-600  text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600'
											: ''
									"
									:href="link.url ? link.url : '#'"
									class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-black hover:bg-cyan-700 hover:text-white focus:outline-offset-0"
									>{{ link.label }}
								</Link>
								<Link
									v-if="link.label === 'n'"
									:key="link.label"
									:href="link.url ? link.url : '#'"
									class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-black hover:bg-cyan-700 hover:text-white focus:outline-offset-0">
									<span class="sr-only"><ChevronRightIcon aria-hidden="true" class="h-5 w-5" /></span>
									<ChevronRightIcon aria-hidden="true" class="h-5 w-5" />
								</Link>
							</template>
						</nav>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<style scoped></style>
