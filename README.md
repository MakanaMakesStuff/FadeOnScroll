This is a Next.js project demonstrating a specialized component
### OnScroll Component
The concept is that we want to animate a particular element whenever it becomes visible on the viewers screen. So we will take the component and wrap it around whatever element we choose(it needs to be an html element).

```typescript
      <OnScroll animation="fadeInLeft" id="sectionOne" persist={false}>
        <section className={styles.section} id="sectionOne">
          <h1>Test Content</h1>
		</section>
	</OnScroll>
```
#### Note that we need to specify the ``id`` on the html element and also pass that same id as a prop to the OnScroll component in order for things to work properly.

Technically the only required field on the OnScroll component is the id prop. The animation defaults to ``fadeIn`` and the other props also have default values.