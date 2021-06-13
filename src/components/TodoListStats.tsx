import { useRecoilValue } from 'recoil';
import { todoListStatsState } from './atom';

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total items: {totalNum}개</li>
      <li>Items completed: {totalCompletedNum}개</li>
      <li>Items not completed: {totalUncompletedNum}개</li>
      <li>Percent completed: {formattedPercentCompleted}%</li>
    </ul>
  );
}

export default TodoListStats;
