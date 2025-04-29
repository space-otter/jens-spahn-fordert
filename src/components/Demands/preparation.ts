export type Demand = {
	id: string;
	title: string;
	summary?: string;
	stated: Date;
	tags: Array<string>;
	reference: string;
};

export type DemandsDTO = {
	list: Array<{
		Id: number;
		demand: string;
		date: string;
		link: string;
		summary?: string;
		tags?: Array<string>;
	}>;
};

export type Filter = {
	label: string;
	matches: number;
	title: string;
	filter: (entries: Array<Demand>) => Array<Demand>;
};

export function Demands(demands: DemandsDTO) {
	return demands.list.map((demand) => ({
		id: (demands.list.length - demand.Id + 1).toString(),
		title: demand.demand,
		summary: demand.summary ?? undefined,
		stated: new Date(demand.date),
		tags: demand.tags ?? [],
		reference: demand.link,
	})) satisfies Array<Demand>;
}

export function YearFilters(demands: Array<Demand>) {
	const years = demands
		.map((demand) => demand.stated.getFullYear())
		.filter(isUnique)
		.map((year) => {
			const filter = createDateFilter(year);
			return {
				label: year.toString(),
				title: `Alle Forderungen aus ${year}`,
				matches: filter(demands).length,
				filter,
			};
		});

	return years satisfies Array<Filter>;
}

export function TagFilters(demands: Array<Demand>) {
	const all = { label: "Alle", title: "Alle Forderungen im Überblick", matches: demands.length, filter: () => demands };

	const tags = demands
		.flatMap((demand) => demand.tags)
		.filter(isUnique)
		.map((tag) => {
			const filter = createTagFilter(tag);
			return {
				label: tag,
				title: `Alle Forderungen zum Thema ${tag}`,
				matches: filter(demands).length,
				filter,
			};
		});

	return [all, ...tags] satisfies Array<Filter>;
}

function createTagFilter(tag: string) {
	return (entries: Array<Demand>) => {
		return entries.filter((entry) => entry.tags.includes(tag));
	};
}

function createDateFilter(year: number) {
	return (entries: Array<Demand>) => {
		return entries.filter((entry) => entry.stated.getFullYear() === year);
	};
}

function isUnique<T_Value>(
	value: T_Value,
	index: number,
	array: Array<T_Value>,
) {
	return array.indexOf(value) === index;
}
