import React from "react";
import { useTranslation } from "react-i18next";

const WealthDistribution = ({ siblings, totalWealth }) => {
    const { t } = useTranslation();

    // Convert totalWealth to a number; it must be valid and positive.
    const totalWealthNum = parseFloat(totalWealth);
    if (!siblings || siblings.length === 0 || !totalWealth || isNaN(totalWealthNum) || totalWealthNum <= 0) {
        return (
            <p className="text-center mt-4">
                {t("Enter total wealth and add siblings to calculate distribution.")}
            </p>
        );
    }

    // --- Bonus Calculations ---

    // Updated Health Bonus (if healthIssue is true)
    const computeHealthBonus = (s) => {
        if (!s.healthIssue) return 0;
        if (s.age < 12) return 20;
        if (s.age < 18) return 14;
        if (s.age < 26) return 8;
        if (s.age < 36) return 5;
        return 3;
    };

    // Age Bonus:
    const computeAgeBonus = (s) => {
        if (s.age < 12) return 20;
        if (s.age < 15) return 15;
        if (s.age < 18) return 10;
        return 0;
    };

    // Studying Bonus:
    const computeStudyingBonus = (s) => (s.studying ? 3 : 0);

    // Elder Bonus:
    // For each sibling, for every sibling younger than them, add a bonus:
    // - If age difference <= 5: bonus = difference * 1%
    // - If >5 and <=10: bonus = difference * 1.2%
    // - If >10 (cap difference at 20): bonus = difference * 0.8%
    const computeElderBonus = (s) => {
        let bonusSum = 0;
        siblings.forEach((other) => {
            if (s.age > other.age) {
                let diff = s.age - other.age;
                if (diff > 20) diff = 20;
                let factor = 0;
                if (diff <= 5) {
                    factor = 1;
                } else if (diff <= 10) {
                    factor = 1.2;
                } else {
                    factor = 0.8;
                }
                bonusSum += diff * factor;
            }
        });
        return bonusSum;
    };

    // --- Effective Weight Calculation ---
    const distributionData = siblings.map((s) => {
        const healthBonus = computeHealthBonus(s);
        const ageBonus = computeAgeBonus(s);
        const studyingBonus = computeStudyingBonus(s);
        const elderBonus = computeElderBonus(s);
        const totalBonus = healthBonus + ageBonus + studyingBonus + elderBonus;
        const effectiveWeight = s.age * (1 + totalBonus / 100);
        return { ...s, healthBonus, ageBonus, studyingBonus, elderBonus, totalBonus, effectiveWeight };
    });

    const totalEffectiveWeight = distributionData.reduce((sum, s) => sum + s.effectiveWeight, 0);

    const distribution = distributionData.map((s) => {
        const share = (s.effectiveWeight / totalEffectiveWeight) * totalWealthNum;
        const percentage = (s.effectiveWeight / totalEffectiveWeight) * 100;
        return { ...s, share, percentage };
    });

    const sumShares = distribution.reduce((sum, s) => sum + s.share, 0).toFixed(2);

    return (
        <div className="container my-4">
            <div className="card shadow-sm p-3">
                <h3 className="card-title text-center">{t("Wealth Distribution")}</h3>
                <ul className="list-group list-group-flush">
                    {distribution.map((s, idx) => (
                        <li key={idx} className="list-group-item">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    {s.name} ({s.age})
                                    {s.healthIssue && (
                                        <>
                                            <span className="badge bg-danger ms-1">{t("Health Issue")}  (+{s.healthBonus.toFixed(2)}%)</span>
                                        </>
                                    )}
                                    {s.age < 18 && (
                                        <span className="badge bg-warning ms-1">
                                            {t("Under 18 Bonus")} (+{computeAgeBonus(s)}%)
                                        </span>
                                    )}
                                    {s.studying && (
                                        <span className="badge bg-info ms-1">
                                            {t("Studying Bonus")} (+{computeStudyingBonus(s)}%)
                                        </span>
                                    )}
                                    {s.age > 0 && computeElderBonus(s) > 0 && (
                                        <span className="badge bg-secondary ms-1">
                                            {t("Elder Bonus")} (+{computeElderBonus(s).toFixed(2)}%)
                                        </span>
                                    )}
                                </div>
                                <div>₹{s.share.toFixed(2)}</div>
                            </div>
                            <div className="progress mt-2" style={{ height: "20px" }}>
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                    role="progressbar"
                                    style={{ width: `${s.percentage}%` }}
                                    aria-valuenow={s.percentage}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {s.percentage.toFixed(2)}%
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-3 text-end">
                    <small>{t("Total distributed")}: ₹{sumShares}</small>
                </div>
                <div className="mt-4">
                    <small className="text-muted">
                        Note: The total wealth is distributed fairly among siblings.
                    </small>
                </div>
            </div>
        </div>
    );
};

export default WealthDistribution;
