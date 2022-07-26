import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Portable',
    Svg: require('@site/static/img/undraw_oni_runtime_blueprint.svg').default,
    description: (
      <>
        Designed to be efficient and focused on advanced techniques shared accross technologies resources.
      </>
    ),
  },
  {
    title: 'Extensible',
    Svg: require('@site/static/img/undraw_oni_runtime_extensible.svg').default,
    description: (
      <>
        Easy to extend functionalities at the core.
      </>
    ),
  },
  {
    title: 'Lab',
    Svg: require('@site/static/img/undraw_oni_runtime_lab.svg').default,
    description: (
      <>
        Experiment as code practice to learn how to deal with different systems implementations
      </>
    ),
  },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
