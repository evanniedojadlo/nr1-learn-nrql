import React from 'react';
import SampleQuery from '../../../components/SampleQuery';

export default function FilterToEventTypes() {
  return (
    <div>
      <p>
        We're truly becoming NRQL wizards! Next we'll explore something few New
        Relic customers are even aware of: filtering to event types.
      </p>

      <p>
        So far, we've made queries that pull data from a single source. But what
        if you want to plot 2 data points that are stored as two different event
        types? Querying NRDB data is not limited to a single event type! To
        query from multiple event types you can include each event type
        seperated by a comma.
      </p>
      <SampleQuery
        nrql="SELECT count(\*) as 'Combined Events' **FROM Transaction, PageView** SINCE  1 day ago"
        span="6"
      />

      <p>
        To make this even more useful, the <code>eventType()</code> function
        tells us which event type a record is from. We can use this to control
        our data output. In this example, we see the total number of{' '}
        <em>Transaction</em> and <em>PageView</em> events combined, as well as
        the totals for only <em>Transaction</em> and <em>PageView</em>.
      </p>
      <SampleQuery
        nrql="SELECT count(\*) as 'Combined Events', filter(count(\*), **WHERE eventType() = 'PageView'**) as 'Page Views', filter(count(\*), **WHERE eventType()='Transaction'**) as 'Transactions' FROM Transaction, PageView SINCE  1 day ago"
        span="12"
      />

      <p>
        Let's look at this in more detail: <code>count(*)</code> is the total
        number of both <em>Transaction</em> and <em>PageView</em> events.
        However, we can use the aggregator function <code>filter()</code> we
        recently learned about to do something unique. We tell it{' '}
        <code>WHERE eventType()='PageView'</code>. This invokes the filter
        function to observe the event type as part of the total result set, then
        filter to display only those specific events. We can even add
        <code>TIMESERIES</code> to visualize 2 directly comparable data points
        on a line graph.
      </p>

      <SampleQuery
        nrql="SELECT count(\*) as 'Combined Events', filter(count(\*), WHERE eventType() = 'PageView') as 'Page Views', filter(count(\*), WHERE eventType()='Transaction') as 'Transactions' FROM Transaction, PageView SINCE  1 day ago TIMESERIES max"
        span="12"
      />

      <h2>Lesson Summary</h2>
      <p>
        We have managed to locate, return, and graph data from two different
        event types. This is an example of how NRQL can allow you to navigate
        any necessary data quickly and succinctly; no complex joining or join
        statements required!
      </p>
    </div>
  );
}
