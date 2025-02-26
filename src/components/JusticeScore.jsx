import React from "react";

const JusticeScore = ({ siblings }) => {
  if (siblings.length === 0) return null;

  // Total base weight = sum of ages
  const totalBase = siblings.reduce((sum, s) => sum + s.age, 0);
  
  // Filter siblings with health issues and get min and max ages among them
  const siblingsWithHealth = siblings.filter(s => s.healthIssue);
  let minHealthAge = null;
  let maxHealthAge = null;
  if (siblingsWithHealth.length > 0) {
    minHealthAge = Math.min(...siblingsWithHealth.map(s => s.age));
    maxHealthAge = Math.max(...siblingsWithHealth.map(s => s.age));
  }
  
  // For a sibling with a health issue, compute bonus:
  // - If there's only one (or all are the same age), use a default bonus of 5%.
  // - Otherwise, linearly interpolate:
  //      bonus = 7% for the youngest and 3% for the eldest, with intermediate values in between.
  const computeBonus = (s) => {
    if (!s.healthIssue) return 0;
    if (siblingsWithHealth.length === 1 || minHealthAge === maxHealthAge) return 5;
    return 7 - ((s.age - minHealthAge) / (maxHealthAge - minHealthAge)) * 4;
  };

  // Compute total effective weight: for siblings with health issues, effective weight = age * (1 + bonus/100); otherwise, it's just age.
  const totalEffective = siblings.reduce((sum, s) => {
    const bonus = computeBonus(s);
    const effective = s.healthIssue ? s.age * (1 + bonus / 100) : s.age;
    return sum + effective;
  }, 0);

  // Calculate the overall average bonus percentage from the effective weight increase.
  const averageBonus = totalBase > 0 ? ((totalEffective / totalBase - 1) * 100).toFixed(2) : 0;

  return (
    <div className="container my-4 text-center">
      <h4>⚖️ Average Health Bonus: {averageBonus}%</h4>
      <div className="mt-2">
        {siblings.map((s, idx) => {
          if (!s.healthIssue) return null;
          const bonus = computeBonus(s);
          return (
            <p key={idx} className="mb-0">
              {s.name} gets an extra {bonus.toFixed(2)}% due to health condition.
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default JusticeScore;
