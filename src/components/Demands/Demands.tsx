import { createSignal, type Component } from "solid-js";
import { For } from "solid-js/web";
import * as styles from "./styles";
import { YearFilters, TagFilters, Demands, type Filter } from "./preparation";
import source from "../../infrastructure/demands/static-data.json";
import { css } from "../../../styled-system/css";

const demands = Demands(source);
const tagFilters = () => TagFilters(demands);
const yearFilters = () => YearFilters(demands);
const [filter, setFilter] = createSignal<Filter>(tagFilters()[0]);

const TimeLine: Component = () => {
  return (
    <div
      class={css({
        position: "relative",
        _before: {
          pointerEvents: "none",
          zIndex: 1,
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          blockSize: "100%",
          inlineSize: "4rem",
          backgroundImage: "linear-gradient(to right, #F4F8F8, transparent)",
        },
        _after: {
          pointerEvents: "none",
          content: '""',
          position: "absolute",
          top: "0",
          right: "0",
          blockSize: "100%",
          inlineSize: "4rem",
          backgroundImage: "linear-gradient(to left, #F4F8F8, transparent)",
        },
      })}
    >
      <ol
        class={css({
          color: "blue",
          display: "flex",
          gap: "2.5rem",
          overflowX: "auto",
          inlineSize: "max-content",
          paddingInline: "4rem",
          alignItems: "flex-end",
          maxInlineSize: "100%",
          marginInline: "auto",
        })}
      >
        <For each={yearFilters()}>
          {(year) => (
            <li data-selected={filter()?.label === year.label}>
              <button
                class={css({
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontWeight: 500,

                  "li[data-selected=false] &": {
                    opacity: 0.5,
                  },
                })}
                type="button"
                onClick={() => setFilter(year)}
              >
                <div
                  class={css({
                    display: "flex",
                    flexDirection: "column-reverse",
                    position: "relative",
                  })}
                >
                  <For
                    each={new Array(Math.round(year.matches / 2)).fill(
                      year.matches
                    )}
                  >
                    {(matches, index) => (
                      <div
                        style={{
                          transform: `translateY(${index() * 1}rem)`,
                          "inline-size": "max-content",
                        }}
                      >
                        <img
                          class={css({
                            width: "60px",
                            height: "26px",
                            objectFit: "contain",
                          })}
                          src="/logo.png"
                          alt=""
                        />
                      </div>
                    )}
                  </For>
                </div>
                <span>{year.label}</span>
              </button>
            </li>
          )}
        </For>
      </ol>
    </div>
  );
};

const Filters: Component = () => {
  return (
    <div class={styles.filterSection}>
      <menu class={styles.filters}>
        <For each={tagFilters()}>
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
        <div
          class={css({
            paddingBlockEnd: "3rem",
          })}
        >
          <TimeLine />
          <Filters />
        </div>
        <h2 class={styles.filterTitle}>{filter().title}</h2>
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
