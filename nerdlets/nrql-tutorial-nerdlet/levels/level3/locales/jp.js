import NextSteps from '../lessons/NextSteps';
import Overview from '../lessons/Overview';
import AggregateQuery3 from '../lessons/AggregateQuery3';
import Extrapolate from '../lessons/Extrapolate';
import FacetCases from '../lessons/FacetCases';
import FilterToEventTypes from '../lessons/FilterToEventTypes';
import OverridingValues from '../lessons/OverridingValues';

const translate = {
  Introduction: {
    Title: 'はじめに',
    Contents: {
      P1: `
        レベル3へようこそ。ここまでよく付いてきてくれました！
        ご利用中の実際の状況でクエリの結果や説明の例をご覧いただくことで、
        データをパワフルに可視化する方法をより深く理解していただけるものと思います。
        （このコースのクエリを、ご利用中のアカウントの様々なイベントタイプで試していただき、
        そのパワーを実感してください！）
      `,
      P2: `
        それでは、次はより高度なコンセプトのご紹介をしましょう。
        これからご紹介する関数や機能は常に使うものではないかもしれませんが、
        使い慣れておくことをおすすめします。
        特定の課題や要件に立ち向かうために必要になるでしょう。
      `,
      P3: `
        このレベルでは、場合分けを使ったFACET、高度な集計関数、
        EXTRAPOLATEキーワードを使った値の取得、フィルタを使った集計関数、
        そして値のオーバーライドをご紹介します。
      `
    }
  },
  'Advanced aggregators': {
    Title: '高度な集計機能',
    Contents: {
      P1: `
        New Relicは様々な集計機能を提供しています。
        それぞれの関数はそれぞれ異なる、便利な目的を提供しています。
        このレッスンでは、Rate, Funnnel, Filter, Histogram, Apdexの集計関数を体験して、
        より高度な疑問の答えを見つけられるようになるでしょう。
      `,
      H2_1: '「単位時間当たり」を計算する',
      P2: `
        <code>rate()</code> 関数から始めてみましょう。
        この関数を使うことにより、単位時間当たりの頻度を可視化することができます。
        小さい時間間隔での頻度を長い時間範囲に渡って理解したいときに有用です。
      `,
      P3: `
        次の例では、過去1時間の範囲で、5分当たりの平均リクエスト数を取得できます。
        また、その前の1時間における5分当たりの平均リクエスト数と比較しています。
        このクエリでは <code>SINCE 1 hour ago</code> を指定して、この時間範囲における値を
        計算しています。
      `,
      P4: `
        <code>rate()</code> は時間間隔を指定することで、
        <em>1分当たりのリクエスト</em>や<em>1秒辺りのリクエスト数</em>を計算することもできます。
      `,
      H2_2: 'ファネル図',
      P5: `
        エンドユーザーの行動を分析するために、ファネル図をお使いの方も多いことでしょう。
        ファネル図を使うことで、複数のレコードに渡る属性値の発生率を追跡できます。
        ユーザーの進捗状況が定義された経路に沿ってどのように上手く進んでいるかを可視化するときによく使われ、
        特にカスタムアトリビュートと組み合わせて使うと強力です。
      `,
      P6: `
        どのくらいのユーザーがトップページを開き、次に他のページを開いているかを、
        <code>funnel()</code> 集計関数を使って可視化してみましょう。
        1つ目のパラメーターで、ユニークなものとして扱うアトリビュートを特定します。
        この例では、New Relic Browserは（cookieの利用を有効にしている場合）サイトを訪れるユーザーに対して
        それぞれ <code>session</code> IDを割り当て、記録しています。
        カスタムアトリビュートで独自のセッションIDをセットすることもできます。
      `,
      P7: `
        続くパラメーターで、ファネルの各ステップをどのように計算するかを指定します。
        "<code>, WHERE アトリビュート 演算子 値</code>" の形式で記述します。
        この例では、2つのステップを指定しています。
        まず、トップページを訪れるたユニークなユーザー数を求め、
        次に、他のページに遷移したユーザーの数を求めています。
        <em>ご利用のデータで妥当そうな結果が得られるか、試してみてください。</em>
      `,
      P8: `
              <code>filter()</code> is a powerful tool that allows you to aggregate
        multiple data points in a single query, offering more control over which
        events are included in function results. In this example, we use{' '}
        <code>filter()</code> to return the separate values for total
        transactions, total web transactions, and total non-web transactions:
      `,
      P9: `
      `,
      P10: `
      `
    }
  },
  'Using extrapolate': {
    Title: 'extrapolateを使用する',
    Contents: {
      P1: `
      `,
      P2: `
      `,
      P3: `
      `,
      P4: `
      `,
      P5: `
      `,
      P6: `
      `,
      P7: `
      `,
      P8: `
      `,
      P9: `
      `,
      P10: `
      `
    }
  },
  'Facet cases': {
    Title: 'FACET CASES',
    Contents: {
      P1: `
      `,
      P2: `
      `,
      P3: `
      `,
      P4: `
      `,
      P5: `
      `,
      P6: `
      `,
      P7: `
      `,
      P8: `
      `,
      P9: `
      `,
      P10: `
      `
    }
  },
  'Filter by event type': {
    Title: 'イベントタイプでフィルタする',
    Contents: {
      P1: `
      `,
      P2: `
      `,
      P3: `
      `,
      P4: `
      `,
      P5: `
      `,
      P6: `
      `,
      P7: `
      `,
      P8: `
      `,
      P9: `
      `,
      P10: `
      `
    }
  },
  'Overriding values': {
    Title: '値をオーバーライドする',
    Contents: {
      P1: `
      `,
      P2: `
      `,
      P3: `
      `,
      P4: `
      `,
      P5: `
      `,
      P6: `
      `,
      P7: `
      `,
      P8: `
      `,
      P9: `
      `,
      P10: `
      `
    }
  },
  Summary: {
    Title: 'まとめ',
    Contents: {
      P1: `
      `,
      P2: `
      `,
      P3: `
      `,
      P4: `
      `,
      P5: `
      `,
      P6: `
      `,
      P7: `
      `,
      P8: `
      `,
      P9: `
      `,
      P10: `
      `
    }
  }
};

export default translate;
