---
head:
  - - meta
    - name: description
      content: Explore GameServersHub's Gaming Wiki for in-depth info on Path of Titans. Find details on gameplay, features, and updates for the ultimate dino MMO adventure! 
  - - meta
    - name: keywords
      content: Path Of Titans
title: TCCitipati
---
# TCCitipati
::: info LAST UPDATED
<span style="color: #ffd369;">10-20-2024 by Mike</span>
:::

> [!IMPORTANT]
>Please be sure to add `CurveOverrides=(CurveName="TCCitipati.` in front of every line in the `Game.ini` under `[/Script/PathOfTitans.IGameSession]`

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

Listed below are the default stats for the following creature:`TCCitipati`

## Attributes:
```cs
Core.MaxHealth",Values=(100,250,350,450,550))
Core.MaxStamina",Values=(100,100,100,100,100))
Core.CombatWeight",Values=(100,575,1150,1725,2300))
Core.Armor",Values=(1,1,1,1,1))
Core.MovementSpeedMultiplier",Values=(1,1,1,1,1))
Core.SprintingSpeedMultiplier",Values=(1,1,1,1,1))
Core.TrottingSpeedMultiplier",Values=(1,1,1,1,1))
Core.BodyFoodAmount",Values=(100,150,200,250,300))
Core.MaxHunger",Values=(50,100,100,100,100))
Core.MaxThirst",Values=(50,100,100,100,100))
Core.HungerDepletionRate",Values=(0.01,0.02,0.03,0.04,0.05))
Core.ThirstDepletionRate",Values=(0.02,0.03,0.04,0.05,0.06))
Core.FoodConsumptionRate",Values=(20,20,30,30,30))
Core.WaterConsumptionRate",Values=(20,20,30,30,30))
Core.MaxOxygen",Values=(100,100,100,100,100))
Core.OxygenDepletionRate",Values=(4,4,4,4,4))
Core.OxygenRecoveryRate",Values=(5,5,5,5,5))
Core.FallingLegDamage",Values=(10,50,50,50,50))
Core.LegHealRate",Values=(1,1,1,1,1))
Core.BleedingRate",Values=(0,0,0,0,0))
Core.BleedingHealRate",Values=(0.03,0.03,0.03,0.03,0.03))
Core.PoisonRate",Values=(0,0,0,0,0))
Core.PoisonHealRate",Values=(0.02,0.02,0.02,0.02,0.02))
Core.VenomRate",Values=(0,0,0,0,0))
Core.VenomHealRate",Values=(0.02,0.02,0.02,0.02,0.02))
Core.HungerDamage",Values=(0.2,0.2,0.2,0.2,0.2))
Core.ThirstDamage",Values=(0.2,0.2,0.2,0.2,0.2))
Core.OxygenDamage",Values=(6,6,6,6,6))
Core.LimpHealthThreshold",Values=(0.5,0.3,0.3,0.3,0.3))
Core.BodyFoodCorpseThreshold",Values=(0.3,0.3,0.3,0.3,0.3))
Core.HealthRecoveryRate",Values=(0.56,1.12,1.68,2.24,2.8))
Core.StaminaRecoveryRate",Values=(1.5,1.3,1.1,0.9,0.7))
Core.JumpForceMultiplier",Values=(0.6,0.7,0.8,0.9,1))
Core.GrowthPerSecond",Values=(1,1,1,1,1))
Core.FallDeathSpeed",Values=(4000,3800,3600,3400,3200))
Core.TurnRadiusMultiplier",Values=(2,1.75,1.5,1.25,1))
Core.TurnInPlaceRadiusMultiplier",Values=(1,1,1,1,1))
Core.BuffDurationMultiplier",Values=(1,1,1,1,1))
Core.SpikeDamageMultiplier",Values=(1,1,1,1,1))
Core.KnockbackMultiplier",Values=(1,1,1,1,1))
Core.GroundAccelerationMultiplier",Values=(1,1,1,1,1))
Core.GroundPreciseAccelerationMultiplier",Values=(1,1,1,1,1))
Core.KnockbackTractionMultiplier",Values=(1,1,1,1,1))
Core.SwimmingAccelerationMultiplier",Values=(1,1,1,1,1))
Core.StaminaJumpCostMultiplier",Values=(1,1,1,1,1))
Core.StaminaSprintCostMultiplier",Values=(1,1,1,1,1))
Core.StaminaFastSwimCostMultiplier",Values=(1,1,1,1,1))
Core.StaminaFastDiveCostMultiplier",Values=(1,1,1,1,1))
Core.StaminaFlyCostMultiplier",Values=(1,1,1,1,1))
Core.StaminaFastFlyCostMultiplier",Values=(1,1,1,1,1))
Core.CarryCapacity",Values=(50,150,300,550,651))
Core.KnockbackToDelatchThreshold",Values=(100,100,100,100,100))
Core.KnockbackToDecarryThreshold",Values=(100,100,100,100,100))
Core.KnockbackToCancelAttackThreshold",Values=(100,100,100,100,100))
```
::: info LAST UPDATED
<span style="color: #ffd369;">10-20-2024 by Mike</span>
:::

## Multipliers:
```cs
Multiplier.HealthRecovery.Resting",Values=(1.15,1.15,1.15,1.15,1.15))
Multiplier.HealthRecovery.Sleeping",Values=(1.5,1.5,1.5,1.5,1.5))
Multiplier.HealthRecovery.Standing",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Walking",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Trotting",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Sprinting",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Swimming",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.FastSwimming",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Diving",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.FastDiving",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Crouching",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Jumping",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.Resting",Values=(3,3,3,3,3))
Multiplier.StaminaRecovery.Sleeping",Values=(5,5,5,5,5))
Multiplier.StaminaRecovery.Standing",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.Walking",Values=(0.9,0.9,0.9,0.9,0.9))
Multiplier.StaminaRecovery.Trotting",Values=(0.75,0.75,0.75,0.75,0.75))
Multiplier.StaminaRecovery.Sprinting",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.Swimming",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.FastSwimming",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.Diving",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.FastDiving",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.Crouching",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.Jumping",Values=(1,1,1,1,1))
Multiplier.OxygenDepletion.Diving",Values=(1,1,1,1,1))
Multiplier.OxygenDepletion.FastDiving",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Resting",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Sleeping",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Standing",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Walking",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Trotting",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Sprinting",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Swimming",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.FastSwimming",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Crouching",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Jumping",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Resting",Values=(2,2,2,2,2))
Multiplier.LegHealRate.Sleeping",Values=(4,4,4,4,4))
Multiplier.LegHealRate.Standing",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Walking",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Trotting",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Sprinting",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Swimming",Values=(1,1,1,1,1))
Multiplier.LegHealRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Diving",Values=(1,1,1,1,1))
Multiplier.LegHealRate.FastDiving",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Crouching",Values=(1,1,1,1,1))
Multiplier.LegHealRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Jumping",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Resting",Values=(0.75,0.75,0.75,0.75,0.75))
Multiplier.BleedingRate.Sleeping",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.BleedingRate.Standing",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Walking",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Trotting",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Sprinting",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Swimming",Values=(1,1,1,1,1))
Multiplier.BleedingRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Diving",Values=(1,1,1,1,1))
Multiplier.BleedingRate.FastDiving",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Crouching",Values=(1,1,1,1,1))
Multiplier.BleedingRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Jumping",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Resting",Values=(6,6,6,6,6))
Multiplier.BleedingHealRate.Sleeping",Values=(9,9,9,9,9))
Multiplier.BleedingHealRate.Standing",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Walking",Values=(0.75,0.75,0.75,0.75,0.75))
Multiplier.BleedingHealRate.Trotting",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.BleedingHealRate.Sprinting",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.BleedingHealRate.Swimming",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.BleedingHealRate.FastSwimming",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.BleedingHealRate.Diving",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.BleedingHealRate.FastDiving",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Crouching",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Jumping",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.PoisonRate.Resting",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Sleeping",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Standing",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Walking",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Trotting",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Sprinting",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Swimming",Values=(1,1,1,1,1))
Multiplier.PoisonRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Diving",Values=(1,1,1,1,1))
Multiplier.PoisonRate.FastDiving",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Crouching",Values=(1,1,1,1,1))
Multiplier.PoisonRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Jumping",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Resting",Values=(1.25,1.25,1.25,1.25,1.25))
Multiplier.PoisonHealRate.Sleeping",Values=(1.75,1.75,1.75,1.75,1.75))
Multiplier.PoisonHealRate.Standing",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Walking",Values=(0.75,0.75,0.75,0.75,0.75))
Multiplier.PoisonHealRate.Trotting",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.PoisonHealRate.Sprinting",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.PoisonHealRate.Swimming",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Diving",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.PoisonHealRate.FastDiving",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.PoisonHealRate.Crouching",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Jumping",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.VenomRate.Resting",Values=(1,1,1,1,1))
Multiplier.VenomRate.Sleeping",Values=(1,1,1,1,1))
Multiplier.VenomRate.Standing",Values=(1,1,1,1,1))
Multiplier.VenomRate.Walking",Values=(1,1,1,1,1))
Multiplier.VenomRate.Trotting",Values=(1,1,1,1,1))
Multiplier.VenomRate.Sprinting",Values=(1,1,1,1,1))
Multiplier.VenomRate.Swimming",Values=(1,1,1,1,1))
Multiplier.VenomRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.VenomRate.Diving",Values=(1,1,1,1,1))
Multiplier.VenomRate.FastDiving",Values=(1,1,1,1,1))
Multiplier.VenomRate.Crouching",Values=(1,1,1,1,1))
Multiplier.VenomRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.VenomRate.Jumping",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Resting",Values=(3,3,3,3,3))
Multiplier.VenomHealRate.Sleeping",Values=(6,6,6,6,6))
Multiplier.VenomHealRate.Standing",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Walking",Values=(0.75,0.75,0.75,0.75,0.75))
Multiplier.VenomHealRate.Trotting",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.VenomHealRate.Sprinting",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.VenomHealRate.Swimming",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Diving",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.VenomHealRate.FastDiving",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.VenomHealRate.Crouching",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Jumping",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.HungerDepletionRate.Resting",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Sleeping",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Standing",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Walking",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Trotting",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Sprinting",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Swimming",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Diving",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.FastDiving",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Crouching",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Jumping",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Resting",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Sleeping",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Standing",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Walking",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Trotting",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Sprinting",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Swimming",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Diving",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.FastDiving",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Crouching",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Jumping",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Resting",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Sleeping",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Standing",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Walking",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Trotting",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Sprinting",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Swimming",Values=(1,1,1,1,1))
Multiplier.HungerDamage.FastSwimming",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Diving",Values=(1,1,1,1,1))
Multiplier.HungerDamage.FastDiving",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Crouching",Values=(1,1,1,1,1))
Multiplier.HungerDamage.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Jumping",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Resting",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Sleeping",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Standing",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Walking",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Trotting",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Sprinting",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Swimming",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.FastSwimming",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Diving",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.FastDiving",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Crouching",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Jumping",Values=(1,1,1,1,1))
Multiplier.OxygenDamage.Diving",Values=(1,1,1,1,1))
Multiplier.OxygenDamage.FastDiving",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Resting",Values=(2,2,2,2,2))
Multiplier.IncomingDamage.Sleeping",Values=(4,4,4,4,4))
Multiplier.IncomingDamage.Standing",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Walking",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Trotting",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Sprinting",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Swimming",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.FastSwimming",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Diving",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.FastDiving",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Crouching",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Jumping",Values=(1,1,1,1,1))
Multiplier.SubSpeciesStat.TurnRadiusMultiplier",Values=(1.15,1.15,1.15,1.15,1.15))
Multiplier.SubSpeciesStat.Attack",Values=(1.1,1.1,1.1,1.1,1.1))
Multiplier.SubSpeciesStat.Speed",Values=(1.05,1.05,1.05,1.05,1.05))
Multiplier.SubSpeciesStat.StaminaRecovery",Values=(1.1,1.1,1.1,1.1,1.1))
BodyFoodDecayPerSecond",Values=(2,1,1,1,0.33))
```
::: info LAST UPDATED
<span style="color: #ffd369;">10-20-2024 by Mike</span>
:::

## Combat:
```cs
BeakSnapDamage",Values=(8,16,24,32,40))
BeakSnapBoneBreakChance",Values=(0,0,0,0,0))
BeakSnapCooldown",Values=(1,1,1,1,1))
BeakSnapBleedAmount",Values=(0,0,0,0,0))
HerbivoreMaxHealthMultiplier",Values=(1.1,1.1,1.1,1.1,1.1))
DesertSurvivorHungerDepletionRateMultiplier",Values=(1.2,1.2,1.2,1.2,1.2))
DesertSurvivorThirstDepletionRateMultiplier",Values=(0.8,0.8,0.8,0.8,0.8))
DesertSurvivorMaxThirstMultiplier",Values=(1.2,1.2,1.2,1.2,1.2))
OsteophagousLegHeal",Values=(1.15,1.15,1.15,1.15,1.15))
OsteophagousHungerDepletionRateMultiplier",Values=(0.9,0.9,0.9,0.9,0.9))
OsteophagousThirstDepletionRateMultiplier",Values=(1.3,1.3,1.3,1.3,1.3))
InsectivoreAccelerationMultiplier",Values=(1.05,1.05,1.05,1.05,1.05))
InsectivoreHungerDepletionRateMultiplier",Values=(1.1,1.1,1.1,1.1,1.1))
InsectivoreThirstDepletionRateMultiplier",Values=(1.2,1.2,1.2,1.2,1.2))
ScavengerStaminaRegenerationMultiplier",Values=(1.1,1.1,1.1,1.1,1.1))
ScavengerHungerDepletionRateMultiplier",Values=(1.2,1.2,1.2,1.2,1.2))
ScavengerThirstDepletionRateMultiplier",Values=(1.4,1.4,1.4,1.4,1.4))
DenseFeathersIncomingVenomRate",Values=(0.85,0.85,0.85,0.85,0.85))
DenseFeathersIncomingBleedingRate",Values=(0.85,0.85,0.85,0.85,0.85))
SleekFeathersMovementSpeedMultiplier",Values=(1.05,1.05,1.05,1.05,1.05))
SleekFeathersArmorMultiplier",Values=(0.95,0.95,0.95,0.95,0.95))
FrightMoltStaminaAttackerDamage",Values=(2,4,6,8,10))
FrightMoltArmorMultiplier",Values=(0.97,0.97,0.97,0.97,0.97))
ChildofSolMaxStaminaMultiplier",Values=(1.2,1.2,1.2,1.2,1.2))
ChildofSolWaterDepletionMultiplier",Values=(1.1,1.1,1.1,1.1,1.1))
ChildofSolAttackDamageMultiplier",Values=(1.05,1.05,1.05,1.05,1.05))
TravelingBandTrotSpeedMultiplier",Values=(1.1,1.1,1.1,1.1,1.1))
SpringyLigamentsJumpForceMultiplier",Values=(1.25,1.25,1.25,1.25,1.25))
SpringyLigamentsFallDeathSpeed",Values=(1.1,1.1,1.1,1.1,1.1))
ScratchDamage",Values=(9,18,27,36,45))
ScratchBoneBreakChance",Values=(0,0,0,0,0))
ScratchCooldown",Values=(2,2,2,2,2))
ScratchStaminaCost",Values=(0,0,0,0,0))
ScratchBleedAmount",Values=(0.06,0.12,0.18,0.24,0.3))
KickDamage",Values=(10,20,30,40,60))
KickBoneBreakChance",Values=(0,0,0,0,0))
KickCooldown",Values=(3,3,3,3,3))
KickBleedAmount",Values=(0.1,0.2,0.3,0.4,0.5))
KickStaminaCost",Values=(1.4,2.8,4.2,5.6,7))
KickMovementSpeed",Values=(100,200,400,800,1000))
TailSweepDamage",Values=(4,8,12,16,20))
TailSweepBoneBreakChance",Values=(0,0,0,0,0))
TailSweepCooldown",Values=(2,2,2,2,2))
TailSweepBleedAmount",Values=(0,0,0,0,0))
TailSweepStaminaCost",Values=(0,0,0,0,0))
TailSlapDamage",Values=(10,12,13,14,15))
TailSlapBoneBreakChance",Values=(0,0,0,0,0))
TailSlapCooldown",Values=(5,5,5,5,5))
TailSlapBleedAmount",Values=(0,0,0,0,0))
TailSlapStaminaCost",Values=(0,0,2,4,4))
TailSlapRadius",Values=(40,80,120,160,200))
TailSlapMovementSpeed",Values=(100,200,400,800,1000))
TailSlapForwardBackwardMod",Values=(20,40,70,100,150))
TailSlapLeftRightMod",Values=(0,0,0,0,0))
TailSlapUpDownMod",Values=(20,40,70,100,150))
ScatteringScreechSpeedMultiplier",Values=(1.02,1.02,1.02,1.02,1.02))
ScatteringScreechDuration",Values=(60,60,60,60,60))
ScatteringScreechCooldown",Values=(300,300,300,300,300))
ScatteringScreechStaminaCost",Values=(10,10,15,20,20))
ScatteringScreechRadius",Values=(4000,4000,4000,4000,4000))
SoothingSongHealingMultiplier",Values=(2,2,2,2,2))
SoothingSongDuration",Values=(20,20,20,20,20))
SoothingSongCooldown",Values=(300,300,300,300,300))
SoothingSongStaminaCost",Values=(10,10,15,20,20))
SoothingSongRadius",Values=(3000,3000,3000,3000,3000))
BroodGrowthDuration",Values=(5,5,5,5,5))
BroodGrowthMultiplier",Values=(2,2,2,2,2))
BroodRadius",Values=(100,100,100,100,100))
BroodCooldown",Values=(20,20,20,20,20))
BroodDebuffHungerDepletion",Values=(1.5,1.5,1.5,1.5,1.5))
BroodDebuffIncomingDamage",Values=(4,4,4,4,4))
DefensiveDisplayDebuffDuration",Values=(4,8,12,18,20))
DefensiveDisplayDebuffDamage",Values=(0.95,0.95,0.95,0.95,0.95))
DefensiveDisplayRadius",Values=(3000,3000,3000,3000,3000))
DefensiveDisplayCooldown",Values=(120,120,120,120,120))
DefensiveDisplayCost",Values=(10,10,10,10,10))
StaminaTrotCostPerSecond",Values=(0,0,0,0,0))
StaminaSprintCostPerSecond",Values=(0.16,0.32,0.48,0.64,0.8))
StaminaSwimgCostPerSecond",Values=(0.4,0.8,1.2,1.6,2))
StaminaFastSwimCostPerSecond",Values=(0.8,1.6,2.4,3.2,4))
StaminaDiveCostPerSecond",Values=(0.4,0.8,1.2,1.6,2))
StaminaFastDiveCostPerSecond",Values=(0.8,1.6,2.4,3.2,4))
StaminaJumpCost",Values=(5,5,5,5,5))
LoneSurvivorArmor",Values=(1.1,1.1,1.1,1.1,1.1))
LoneSurvivorAcceleration",Values=(2,2,2,2,2))
LoneSurvivorPreciseAcceleration",Values=(2,2,2,2,2))
LoneSurvivorTurnRadius",Values=(1.05,1.05,1.05,1.05,1.05))
GrabDamage",Values=(0,0,0,0,0))
GrabCooldown",Values=(1,1,1,1,1))
GrabStaminaCost",Values=(0,0,0,0,0))
GrabCarryStaminaCost",Values=(0.1,0.1,0.1,0.1,0.1))
```
::: info LAST UPDATED
<span style="color: #ffd369;">10-20-2024 by Mike</span>
:::
<p style="text-align: center;"><span data-preserver-spaces="true">Experience seamless gameplay with our top-of-the-line "</span><strong><span data-preserver-spaces="true">Path Of Titans</span></strong><span data-preserver-spaces="true">" video game servers for hosting. Dominate the virtual world and build your killer dinosaur-themed world with your gaming squad. </span><span data-preserver-spaces="true">With </span><strong><span data-preserver-spaces="true">lightning-fast hardware</span></strong><span data-preserver-spaces="true">, </span><strong><span data-preserver-spaces="true">unrivaled performance</span></strong><span data-preserver-spaces="true">, and </span><strong><span data-preserver-spaces="true">reliable uptime</span></strong><span data-preserver-spaces="true">, our servers ensure an immersive gaming experience for your communitys needs. </span><span data-preserver-spaces="true">Take advantage of our cutting-edge features, including </span><strong><span data-preserver-spaces="true">customizable settings</span></strong><span data-preserver-spaces="true">, an </span><strong><span data-preserver-spaces="true">intuitive control panel</span></strong><span data-preserver-spaces="true">, and </span><strong><span data-preserver-spaces="true">dedicated support</span></strong><span data-preserver-spaces="true">. Dont miss out on this opportunity to level up your gaming experience.</span></p>
<h3 style="text-align: center;"><span style="color: #ffd369;"><a style="color: #ffd369;" href="https://gameservershub.com/hosting/path-of-titans/"><strong>Get your server today!</strong></a></span></h3>