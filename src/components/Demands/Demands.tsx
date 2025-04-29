import { createSignal, type Component } from "solid-js";
import { For } from "solid-js/web";
import * as styles from "./styles";
import { Filters as FilterOptions, Demands, type Filter } from "./preparation";
import source from "../../infrastructure/demands/static-data.json";

const demands = Demands(source);
const filters = () => FilterOptions(demands);
const [filter, setFilter] = createSignal<Filter>(filters()[0]);

const Filters: Component = () => {
  return (
    <div class={styles.filterSection}>
      <h2 class={styles.filterTitle}>{filter().title}</h2>
      <menu class={styles.filters}>
        <For each={filters()}>
          {(category) => (
            <li data-selected={filter()?.label === category.label}>
              <button
                class={styles.filter}
                type="button"
                onClick={() => setFilter(category)}
              >
                {category.label} ({category.matches})
              </button>
            </li>
          )}
        </For>
      </menu>
    </div>
  );
};

export const List: Component = () => {
  const filteredDemands = () =>
    filter() ? filter()?.filter(demands) : demands;

  return (
    <div class={styles.sectionWrapper}>
      <section class={styles.section}>
        <Filters />
        <ul class={styles.demands}>
          <For each={filteredDemands()}>
            {(demand, index) => (
              <li class={styles.demand}>
                <div class={styles.dateMarker}>
                  <time class={styles.demandStated}>
                    {new Date(demand.stated).toLocaleDateString("de-DE", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </time>
                  <div class={styles.dateMarkerConnector} />
                </div>
                <div class={styles.demandCard}>
                  <div class={styles.demandId}>#{demand.id}</div>
                  <h3 class={styles.demandTitle}>
                    <a href={demand.reference} target="_blank" rel="noreferrer">
                      {demand.title}
                    </a>
                  </h3>
                  <p class={styles.summary}>{demand.summary}</p>
                  <ul class={styles.tags}>
                    <For each={demand.tags}>
                      {(tag) => <li class={styles.tag}>{tag}</li>}
                    </For>
                  </ul>
                </div>
              </li>
            )}
          </For>
        </ul>
      </section>
    </div>
  );
};
