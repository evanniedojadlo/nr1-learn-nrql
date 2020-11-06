import React from 'react';
import { Trans } from 'react-i18next';

export default function NextSteps() {
  return (
    <div>
      <p>
        <strong>
          <Trans i18nKey="Contents.P1">
            Congratulations on completing Level 1: Learning The Ropes!
          </Trans>
        </strong>
      </p>
      <p>
        <Trans i18nKey="Contents.P2">
          If you've made it this far, you now know the basics of querying event
          data using NRQL. You can create dashboards and alerts; and, if you
          know some React, you can even create your own Apps to run natively
          inside New Relic One.
        </Trans>
      </p>
      <p>
        <Trans i18nKey="Contents.P3">We've shown you the basics of:</Trans>
      </p>
      <ul>
        <Trans i18nKey="Contents.P4">
          <li>
            <code>SELECT</code> and <code>FROM</code>
          </li>
          <li>
            <code>LIMIT</code>
          </li>
          <li>Specifying attributes</li>
          <li>
            Aggregating using <code>average()</code>, <code>max()</code>,{' '}
            <code>min()</code>, <code>sum()</code>, and <code>count()</code>
          </li>
          <li>
            Using <code>SINCE</code> and <code>UNTIL</code>
          </li>
          <li>
            Plotting line graphs with <code>TIMESERIES</code>
          </li>
          <li>
            Filtering using <code>WHERE</code>
          </li>
          <li>
            Grouping attributes using <code>FACET</code>
          </li>
        </Trans>
      </ul>
      <p>
        <Trans i18nKey="Contents.P5">
          You're now a Level 1 NRQL whiz. We've got more to show you but pat
          yourself on the back, you've learned enough NRQL to begin visualizing
          your data in meaningful ways.
        </Trans>
      </p>
    </div>
  );
}
