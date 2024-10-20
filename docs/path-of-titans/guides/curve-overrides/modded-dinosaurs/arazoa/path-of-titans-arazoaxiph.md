---
head:
  - - meta
    - name: description
      content: Explore GameServersHub's Gaming Wiki for in-depth info on Path of Titans. Find details on gameplay, features, and updates for the ultimate dino MMO adventure! 
  - - meta
    - name: keywords
      content: Path Of Titans
title: ArazoaXiph
---
# ArazoaXiph
::: info LAST UPDATED
<span style="color: #ffd369;">10-20-2024 by Mike</span>
:::

> [!IMPORTANT]
>Please be sure to add `CurveOverrides=(CurveName="ArazoaXiph.` in front of every line in the `Game.ini` under `[/Script/PathOfTitans.IGameSession]`

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

Listed below are the default stats for the following creature:`ArazoaXiph`

## Attributes:
```cs
Core.MaxHealth",Values=(100,200,300,400,500))
Core.MaxStamina",Values=(100,100,100,100,100))
Core.CombatWeight",Values=(300,975,1200,1875,3000))
Core.Armor",Values=(1,1,1,1,1))
Core.MovementSpeedMultiplier",Values=(1,1,1,1,1))
Core.SprintingSpeedMultiplier",Values=(1,1,1,1,1))
Core.TrottingSpeedMultiplier",Values=(1,1,1,1,1))
Core.BodyFoodAmount",Values=(100,225,350,475,600))
Core.MaxHunger",Values=(50,112.5,175,237.5,300))
Core.MaxThirst",Values=(50,112.5,175,237.5,300))
Core.HungerDepletionRate",Values=(0.03,0.08,0.12,0.16,0.2))
Core.ThirstDepletionRate",Values=(0.12,0.24,0.48,0.64,0.8))
Core.ThirstReplenishRate",Values=(3,3,3,3,3))
Core.FoodConsumptionRate",Values=(20,30,40,50,55))
Core.WaterConsumptionRate",Values=(20,30,40,50,55))
Core.MaxOxygen",Values=(100,100,100,100,100))
Core.OxygenDepletionRate",Values=(0.25,0.2,0.17,0.15,0.15))
Core.OxygenRecoveryRate",Values=(50,50,50,50,50))
Core.FallingLegDamage",Values=(10,50,50,50,50))
Core.LegHealRate",Values=(1,1,1,1,1))
Core.BleedingRate",Values=(0,0,0,0,0))
Core.BleedingHealRate",Values=(0.03,0.03,0.03,0.03,0.03))
Core.PoisonRate",Values=(0,0,0,0,0))
Core.PoisonHealRate",Values=(0.02,0.02,0.02,0.02,0.02))
Core.VenomRate",Values=(0,0,0,0,0))
Core.VenomHealRate",Values=(0.02,0.02,0.02,0.02,0.02))
Core.HungerDamage",Values=(0.2,0.2,0.2,0.2,0.2))
Core.ThirstDamage",Values=(5,5,5,5,5))
Core.OxygenDamage",Values=(2,2.5,3,4,5))
Core.PoisonDamage",Values=(10,20,20,30,30))
Core.LimpHealthThreshold",Values=(0.5,0.3,0.3,0.3,0.3))
Core.BodyFoodCorpseThreshold",Values=(0.3,0.3,0.3,0.3,0.3))
Core.HealthRecoveryRate",Values=(0.83,1.25,1.56,1.81,2))
Core.StaminaRecoveryRate",Values=(1.6,1.5,1.4,1.35,1.3))
Core.GrowthPerSecond",Values=(1,1,1,1,1))
Core.FallDeathSpeed",Values=(2000,2000,2000,2000,2000))
Core.TurnRadiusMultiplier",Values=(2,1.75,1.5,1.3,1.3))
Core.TurnInPlaceRadiusMultiplier",Values=(1,1,1,1,1))
Core.BuffDurationMultiplier",Values=(1,1,1,1,1))
Core.SpikeDamageMultiplier",Values=(1,1,1,1,1))
Core.KnockbackMultiplier",Values=(1,1,1,1,1))
Core.WaterVision",Values=(2,2,2,2,2))
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
Multiplier.HealthRecovery.Sleeping",Values=(1.15,1.15,1.15,1.15,1.15))
Multiplier.HealthRecovery.Standing",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Walking",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Trotting",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Sprinting",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Swimming",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.TrotSwimming",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.FastSwimming",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Diving",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.FastDiving",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.TrotDiving",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Crouching",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Jumping",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Flying",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.FastFlying",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Latched",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Carried",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.Resting",Values=(1,1,1,1,2))
Multiplier.StaminaRecovery.Sleeping",Values=(1,1,1,1,4))
Multiplier.StaminaRecovery.Standing",Values=(1,1,1,1,1.2))
Multiplier.StaminaRecovery.Walking",Values=(0.9,0.9,0.9,0.9,0.9))
Multiplier.StaminaRecovery.Trotting",Values=(0.75,0.75,0.75,0.75,0.75))
Multiplier.StaminaRecovery.Sprinting",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.Swimming",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.TrotSwimming",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.FastSwimming",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.Diving",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.FastDiving",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.TrotDiving",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.Crouching",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.Jumping",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.Flying",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.FastFlying",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.Latched",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.Carried",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.OxygenDepletion.Diving",Values=(0,0,0,0,0))
Multiplier.OxygenDepletion.TrotDiving",Values=(0,0,0,0,0))
Multiplier.OxygenDepletion.FastDiving",Values=(0,0,0,0,0))
Multiplier.OxygenDepletion.LatchedUnderwater",Values=(0,0,0,0,0))
Multiplier.OxygenDepletion.CarriedUnderwater",Values=(0,0,0,0,0))
Multiplier.OxygenRecovery.Resting",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Sleeping",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Standing",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Walking",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Trotting",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Sprinting",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Swimming",Values=(8,8,8,8,8))
Multiplier.OxygenRecovery.TrotSwimming",Values=(8,8,8,8,8))
Multiplier.OxygenRecovery.FastSwimming",Values=(8,8,8,8,8))
Multiplier.OxygenRecovery.Crouching",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Jumping",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Flying",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.FastFlying",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Latched",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.Carried",Values=(1,1,1,1,1))
Multiplier.OxygenRecovery.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Resting",Values=(2,2,2,2,2))
Multiplier.LegHealRate.Sleeping",Values=(4,4,4,4,4))
Multiplier.LegHealRate.Standing",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Walking",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Trotting",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Sprinting",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Swimming",Values=(1,1,1,1,1))
Multiplier.LegHealRate.TrotSwimming",Values=(1,1,1,1,1))
Multiplier.LegHealRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Diving",Values=(1,1,1,1,1))
Multiplier.LegHealRate.TrotDiving",Values=(1,1,1,1,1))
Multiplier.LegHealRate.FastDiving",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Crouching",Values=(1,1,1,1,1))
Multiplier.LegHealRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Jumping",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Flying",Values=(1,1,1,1,1))
Multiplier.LegHealRate.FastFlying",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Latched",Values=(1,1,1,1,1))
Multiplier.LegHealRate.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Carried",Values=(1,1,1,1,1))
Multiplier.LegHealRate.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Resting",Values=(0.75,0.75,0.75,0.75,0.75))
Multiplier.BleedingRate.Sleeping",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.BleedingRate.Standing",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Walking",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Trotting",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Sprinting",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Swimming",Values=(1,1,1,1,1))
Multiplier.BleedingRate.TrotSwimming",Values=(1,1,1,1,1))
Multiplier.BleedingRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Diving",Values=(1,1,1,1,1))
Multiplier.BleedingRate.TrotDiving",Values=(1,1,1,1,1))
Multiplier.BleedingRate.FastDiving",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Crouching",Values=(1,1,1,1,1))
Multiplier.BleedingRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Jumping",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Flying",Values=(1,1,1,1,1))
Multiplier.BleedingRate.FastFlying",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Latched",Values=(1,1,1,1,1))
Multiplier.BleedingRate.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Carried",Values=(1,1,1,1,1))
Multiplier.BleedingRate.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Resting",Values=(6,6,6,6,6))
Multiplier.BleedingHealRate.Sleeping",Values=(9,9,9,9,9))
Multiplier.BleedingHealRate.Standing",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Walking",Values=(0.75,0.75,0.75,0.75,0.75))
Multiplier.BleedingHealRate.Trotting",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.BleedingHealRate.Sprinting",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.BleedingHealRate.Swimming",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.BleedingHealRate.TrotSwimming",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.BleedingHealRate.FastSwimming",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.BleedingHealRate.Diving",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.BleedingHealRate.TrotDiving",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.BleedingHealRate.FastDiving",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.BleedingHealRate.Crouching",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Jumping",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.BleedingHealRate.Flying",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.FastFlying",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Latched",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Carried",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Resting",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Sleeping",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Standing",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Walking",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Trotting",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Sprinting",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Swimming",Values=(1,1,1,1,1))
Multiplier.PoisonRate.TrotSwimming",Values=(1,1,1,1,1))
Multiplier.PoisonRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Diving",Values=(1,1,1,1,1))
Multiplier.PoisonRate.TrotDiving",Values=(1,1,1,1,1))
Multiplier.PoisonRate.FastDiving",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Crouching",Values=(1,1,1,1,1))
Multiplier.PoisonRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Jumping",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Flying",Values=(1,1,1,1,1))
Multiplier.PoisonRate.FastFlying",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Latched",Values=(1,1,1,1,1))
Multiplier.PoisonRate.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.PoisonRate.Carried",Values=(1,1,1,1,1))
Multiplier.PoisonRate.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Resting",Values=(1.25,1.25,1.25,1.25,1.25))
Multiplier.PoisonHealRate.Sleeping",Values=(1.75,1.75,1.75,1.75,1.75))
Multiplier.PoisonHealRate.Standing",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Walking",Values=(0.75,0.75,0.75,0.75,0.75))
Multiplier.PoisonHealRate.Trotting",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.PoisonHealRate.Sprinting",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.PoisonHealRate.Swimming",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.PoisonHealRate.TrotSwimming",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.PoisonHealRate.FastSwimming",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.PoisonHealRate.Diving",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.PoisonHealRate.TrotDiving",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.PoisonHealRate.FastDiving",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.PoisonHealRate.Crouching",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Jumping",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.PoisonHealRate.Flying",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.FastFlying",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Latched",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Carried",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.VenomRate.Resting",Values=(1,1,1,1,1))
Multiplier.VenomRate.Sleeping",Values=(1,1,1,1,1))
Multiplier.VenomRate.Standing",Values=(1,1,1,1,1))
Multiplier.VenomRate.Walking",Values=(1,1,1,1,1))
Multiplier.VenomRate.Trotting",Values=(1,1,1,1,1))
Multiplier.VenomRate.Sprinting",Values=(1,1,1,1,1))
Multiplier.VenomRate.Swimming",Values=(1,1,1,1,1))
Multiplier.VenomRate.TrotSwimming",Values=(1,1,1,1,1))
Multiplier.VenomRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.VenomRate.Diving",Values=(1,1,1,1,1))
Multiplier.VenomRate.TrotDiving",Values=(1,1,1,1,1))
Multiplier.VenomRate.FastDiving",Values=(1,1,1,1,1))
Multiplier.VenomRate.Crouching",Values=(1,1,1,1,1))
Multiplier.VenomRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.VenomRate.Jumping",Values=(1,1,1,1,1))
Multiplier.VenomRate.Flying",Values=(1,1,1,1,1))
Multiplier.VenomRate.FastFlying",Values=(1,1,1,1,1))
Multiplier.VenomRate.Latched",Values=(1,1,1,1,1))
Multiplier.VenomRate.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.VenomRate.Carried",Values=(1,1,1,1,1))
Multiplier.VenomRate.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Resting",Values=(3,3,3,3,3))
Multiplier.VenomHealRate.Sleeping",Values=(6,6,6,6,6))
Multiplier.VenomHealRate.Standing",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Walking",Values=(0.75,0.75,0.75,0.75,0.75))
Multiplier.VenomHealRate.Trotting",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.VenomHealRate.Sprinting",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.VenomHealRate.Swimming",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.VenomHealRate.TrotSwimming",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.VenomHealRate.FastSwimming",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.VenomHealRate.Diving",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.VenomHealRate.TrotDiving",Values=(0.5,0.5,0.5,0.5,0.5))
Multiplier.VenomHealRate.FastDiving",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.VenomHealRate.Crouching",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Jumping",Values=(0.25,0.25,0.25,0.25,0.25))
Multiplier.VenomHealRate.Flying",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.FastFlying",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Latched",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Carried",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Resting",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Sleeping",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Standing",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Walking",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Trotting",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Sprinting",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Swimming",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.TrotSwimming",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Diving",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.TrotDiving",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.FastDiving",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Crouching",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Jumping",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Flying",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.FastFlying",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Latched",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.Carried",Values=(1,1,1,1,1))
Multiplier.HungerDepletionRate.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Resting",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Sleeping",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Standing",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Walking",Values=(5,5,5,5,5))
Multiplier.ThirstDepletionRate.Trotting",Values=(9,9,9,9,9))
Multiplier.ThirstDepletionRate.Sprinting",Values=(17,17,17,17,17))
Multiplier.ThirstDepletionRate.Swimming",Values=(0,0,0,0,0))
Multiplier.ThirstDepletionRate.TrotSwimming",Values=(0,0,0,0,0))
Multiplier.ThirstDepletionRate.FastSwimming",Values=(0,0,0,0,0))
Multiplier.ThirstDepletionRate.Diving",Values=(0,0,0,0,0))
Multiplier.ThirstDepletionRate.TrotDiving",Values=(0,0,0,0,0))
Multiplier.ThirstDepletionRate.FastDiving",Values=(0,0,0,0,0))
Multiplier.ThirstDepletionRate.Crouching",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Jumping",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Flying",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.FastFlying",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Latched",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.Carried",Values=(1,1,1,1,1))
Multiplier.ThirstDepletionRate.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.ThirstReplenishRate.Resting",Values=(0,0,0,0,0))
Multiplier.ThirstReplenishRate.Sleeping",Values=(0,0,0,0,0))
Multiplier.ThirstReplenishRate.Standing",Values=(0,0,0,0,0))
Multiplier.ThirstReplenishRate.Walking",Values=(0,0,0,0,0))
Multiplier.ThirstReplenishRate.Trotting",Values=(0,0,0,0,0))
Multiplier.ThirstReplenishRate.Sprinting",Values=(0,0,0,0,0))
Multiplier.ThirstReplenishRate.Swimming",Values=(8,8,8,8,8))
Multiplier.ThirstReplenishRate.TrotSwimming",Values=(8,8,8,8,8))
Multiplier.ThirstReplenishRate.FastSwimming",Values=(8,8,8,8,8))
Multiplier.ThirstReplenishRate.Diving",Values=(8,8,8,8,8))
Multiplier.ThirstReplenishRate.TrotDiving",Values=(8,8,8,8,8))
Multiplier.ThirstReplenishRate.FastDiving",Values=(8,8,8,8,8))
Multiplier.ThirstReplenishRate.Crouching",Values=(0,0,0,0,0))
Multiplier.ThirstReplenishRate.CrouchWalking",Values=(0,0,0,0,0))
Multiplier.ThirstReplenishRate.Jumping",Values=(0,0,0,0,0))
Multiplier.ThirstReplenishRate.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.ThirstReplenishRate.Latched",Values=(0,0,0,0,0))
Multiplier.ThirstReplenishRate.Carried",Values=(1,1,1,1,1))
Multiplier.ThirstReplenishRate.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Resting",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Sleeping",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Standing",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Walking",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Trotting",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Sprinting",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Swimming",Values=(1,1,1,1,1))
Multiplier.HungerDamage.TrotSwimming",Values=(1,1,1,1,1))
Multiplier.HungerDamage.FastSwimming",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Diving",Values=(1,1,1,1,1))
Multiplier.HungerDamage.TrotDiving",Values=(1,1,1,1,1))
Multiplier.HungerDamage.FastDiving",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Crouching",Values=(1,1,1,1,1))
Multiplier.HungerDamage.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Jumping",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Flying",Values=(1,1,1,1,1))
Multiplier.HungerDamage.FastFlying",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Latched",Values=(1,1,1,1,1))
Multiplier.HungerDamage.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.HungerDamage.Carried",Values=(1,1,1,1,1))
Multiplier.HungerDamage.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Resting",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Sleeping",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Standing",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Walking",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Trotting",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Sprinting",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Swimming",Values=(0,0,0,0,0))
Multiplier.ThirstDamage.TrotSwimming",Values=(0,0,0,0,0))
Multiplier.ThirstDamage.FastSwimming",Values=(0,0,0,0,0))
Multiplier.ThirstDamage.Diving",Values=(0,0,0,0,0))
Multiplier.ThirstDamage.TrotDiving",Values=(0,0,0,0,0))
Multiplier.ThirstDamage.FastDiving",Values=(0,0,0,0,0))
Multiplier.ThirstDamage.Crouching",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Jumping",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Flying",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.FastFlying",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Latched",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.Carried",Values=(1,1,1,1,1))
Multiplier.ThirstDamage.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.OxygenDamage.Diving",Values=(0,0,0,0,0))
Multiplier.OxygenDamage.TrotDiving",Values=(0,0,0,0,0))
Multiplier.OxygenDamage.FastDiving",Values=(0,0,0,0,0))
Multiplier.OxygenDamage.LatchedUnderwater",Values=(0,0,0,0,0))
Multiplier.OxygenDamage.CarriedUnderwater",Values=(0,0,0,0,0))
Multiplier.IncomingDamage.Resting",Values=(2,2,2,2,2))
Multiplier.IncomingDamage.Sleeping",Values=(4,4,4,4,4))
Multiplier.IncomingDamage.Standing",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Walking",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Trotting",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Sprinting",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Swimming",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.TrotSwimming",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.FastSwimming",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Diving",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.TrotDiving",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.FastDiving",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Crouching",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Jumping",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Flying",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.FastFlying",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Latched",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.LatchedUnderwater",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.Carried",Values=(1,1,1,1,1))
Multiplier.IncomingDamage.CarriedUnderwater",Values=(1,1,1,1,1))
Multiplier.MobMentality.AttackDamage",Values=(0.75,0.75,0.75,0.75,0.75))
Multiplier.MobMentality.BleedAmount",Values=(0.75,0.75,0.75,0.75,0.75))
BodyFoodDecayPerSecond",Values=(2,1,1,1,1))
```
::: info LAST UPDATED
<span style="color: #ffd369;">10-20-2024 by Mike</span>
:::

## Combat:
```cs
BiteDamage",Values=(20,25,30,35,40))
BiteCooldown",Values=(1.5,1.5,1.5,1.5,1.5))
IncommingBiteDamage",Values=(0.75,0.75,0.75,0.75,0.75))
XiphBiteCooldown",Values=(0.88,0.88,0.88,0.88,0.88))
StaminaTrotCostPerSecond",Values=(0,0,0,0,0))
StaminaSprintCostPerSecond",Values=(0.8,1,1.2,1.4,1.6))
StaminaSwimgCostPerSecond",Values=(0,0,0,0,0))
StaminaTrotSwimCostPerSecond",Values=(0,0,0,0,0))
StaminaFastSwimCostPerSecond",Values=(0.3,0.4,0.5,0.55,0.6))
StaminaDiveCostPerSecond",Values=(0,0,0,0,0))
StaminaFastDiveCostPerSecond",Values=(0.3,0.4,0.5,0.55,0.6))
StaminaTrotDiveCostPerSecond",Values=(0,0,0,0,0))
StaminaJumpCost",Values=(5,5,5,5,5))
StaminaFlyCostPerSecond",Values=(3,5,5,7,10))
StaminaFastFlyCostPerSecond",Values=(3,5,5,7,10))
StaminaLatchCostPerSecond",Values=(1,1,1,1,1))
BuckingStaminaDrain",Values=(4,5,6,7,8))
SanguineHunger.AttackDamageMultiplier",Values=(1.2,1.2,1.2,1.2,1.2))
SanguineHunger.IncomingDamageMultiplier",Values=(1.1,1.1,1.1,1.1,1.1))
AgilityMentality.SwimmingAccelerationMultiplier",Values=(1.01,1.01,1.01,1.01,1.01))
AgilityMentality.StaminaRecoveryRateMultiplier",Values=(1.02,1.02,1.02,1.02,1.02))
TearingBiteDamage",Values=(10,15,20,25,25))
TearingBiteCooldown",Values=(4,4,3,3,2))
TearingBiteBleedAmount",Values=(0.75,0.75,0.75,0.75,0.75))
IncommingTearBiteDamage",Values=(0.75,0.75,0.75,0.75,0.75))
IncommingTearBleed",Values=(0.75,0.75,0.75,0.75,0.75))
XiphTearCooldown",Values=(1.45,1.45,1.45,1.45,1.45))
HideRoughDamage",Values=(2,4,6,8,10))
HideRoughArmorMultiplier",Values=(1.1,1.1,1.1,1.1,1.1))
HideRoughSpeedMultiplier",Values=(0.9,0.9,0.9,0.9,0.9))
HideStreamlinedSpeedMultiplier",Values=(1.15,1.15,1.15,1.15,1.15))
HideStreamlinedArmorMultiplier",Values=(0.9,0.9,0.9,0.9,0.9))
FlashDuration",Values=(5,5,5,5,5))
FlashCooldown",Values=(45,45,45,45,45))
LungeStaminaCost",Values=(10,10,10,10,10))
LungeCooldown",Values=(10,10,10,10,10))
LungeStrength",Values=(2400,3000,3600,4000,5000))
LungeRiseDuration",Values=(1.25,1.25,1.25,1.25,1.25))
LoneSurvivorArmor",Values=(1.1,1.1,1.1,1.1,1.1))
LoneSurvivorAcceleration",Values=(2,2,2,2,2))
LoneSurvivorTurnRadius",Values=(1.05,1.05,1.05,1.05,1.05))
```
::: info LAST UPDATED
<span style="color: #ffd369;">10-20-2024 by Mike</span>
:::
<p style="text-align: center;"><span data-preserver-spaces="true">Experience seamless gameplay with our top-of-the-line "</span><strong><span data-preserver-spaces="true">Path Of Titans</span></strong><span data-preserver-spaces="true">" video game servers for hosting. Dominate the virtual world and build your killer dinosaur-themed world with your gaming squad. </span><span data-preserver-spaces="true">With </span><strong><span data-preserver-spaces="true">lightning-fast hardware</span></strong><span data-preserver-spaces="true">, </span><strong><span data-preserver-spaces="true">unrivaled performance</span></strong><span data-preserver-spaces="true">, and </span><strong><span data-preserver-spaces="true">reliable uptime</span></strong><span data-preserver-spaces="true">, our servers ensure an immersive gaming experience for your communitys needs. </span><span data-preserver-spaces="true">Take advantage of our cutting-edge features, including </span><strong><span data-preserver-spaces="true">customizable settings</span></strong><span data-preserver-spaces="true">, an </span><strong><span data-preserver-spaces="true">intuitive control panel</span></strong><span data-preserver-spaces="true">, and </span><strong><span data-preserver-spaces="true">dedicated support</span></strong><span data-preserver-spaces="true">. Dont miss out on this opportunity to level up your gaming experience.</span></p>
<h3 style="text-align: center;"><span style="color: #ffd369;"><a style="color: #ffd369;" href="https://gameservershub.com/hosting/path-of-titans/"><strong>Get your server today!</strong></a></span></h3>