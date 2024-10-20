---
head:
  - - meta
    - name: description
      content: Explore GameServersHub's Gaming Wiki for in-depth info on Path of Titans. Find details on gameplay, features, and updates for the ultimate dino MMO adventure! 
  - - meta
    - name: keywords
      content: Path Of Titans
title: Hibber
---
# Hibber
::: info LAST UPDATED
<span style="color: #ffd369;">10-20-2024 by Mike</span>
:::

> [!IMPORTANT]
>Please be sure to add `CurveOverrides=(CurveName="Hibber.` in front of every line in the `Game.ini` under `[/Script/PathOfTitans.IGameSession]`

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

Listed below are the default stats for the following creature:`Hibber`

## Attributes:
```cs
Core.MaxHealth",Values=(150,262.5,375,487.5,550))
Core.MaxStamina",Values=(100,100,100,100,100))
Core.CombatWeight",Values=(150,500,785,1150,1500))
Core.Armor",Values=(1,2,3,3,3.5))
Core.MovementSpeedMultiplier",Values=(1,1,1,1,1))
Core.SprintingSpeedMultiplier",Values=(1,1,1,1,1))
Core.TrottingSpeedMultiplier",Values=(1,1,1,1,1))
Core.BodyFoodAmount",Values=(100,225,350,475,600))
Core.MaxHunger",Values=(50,112.5,175,237.5,300))
Core.MaxThirst",Values=(50,112.5,175,237.5,300))
Core.HungerDepletionRate",Values=(0.03,0.05,0.07,0.1,0.13))
Core.ThirstDepletionRate",Values=(0,0,0,0,0))
Core.ThirstReplenishRate",Values=(3,3,3,3,3))
Core.FoodConsumptionRate",Values=(20,30,40,50,55))
Core.WaterConsumptionRate",Values=(20,30,40,50,55))
Core.MaxOxygen",Values=(10,10,10,10,10))
Core.OxygenDepletionRate",Values=(0.15,0.15,0.15,0.15,0.15))
Core.OxygenRecoveryRate",Values=(50,50,50,50,50))
Core.FallingLegDamage",Values=(10,50,50,50,50))
Core.LegHealRate",Values=(1,1,1,1,1))
Core.BleedingRate",Values=(0,0,0,0,0))
Core.BleedingHealRate",Values=(0.09,0.09,0.09,0.09,0.09))
Core.PoisonRate",Values=(0,0,0,0,0))
Core.PoisonHealRate",Values=(0.02,0.02,0.02,0.02,0.02))
Core.VenomRate",Values=(0,0,0,0,0))
Core.VenomHealRate",Values=(0.02,0.02,0.02,0.02,0.02))
Core.HungerDamage",Values=(0.2,0.2,0.2,0.2,0.2))
Core.ThirstDamage",Values=(5,5,5,5,5))
Core.OxygenDamage",Values=(10,12,15,17,20))
Core.PoisonDamage",Values=(1,1,1,1,1))
Core.WaterVision",Values=(1,1,1,1,1))
Core.LimpHealthThreshold",Values=(0.5,0.3,0.3,0.3,0.3))
Core.BodyFoodCorpseThreshold",Values=(0.3,0.3,0.3,0.3,0.3))
Core.HealthRecoveryRate",Values=(0.83,1.25,1.56,1.81,2))
Core.StaminaRecoveryRate",Values=(1.4,1.4,1.4,1.4,1.4))
Core.GrowthPerSecond",Values=(1,1,1,1,1))
Core.FallDeathSpeed",Values=(8000,8000,8000,8000,8000))
Core.TurnRadiusMultiplier",Values=(1,1,1,1,1))
Core.TurnInPlaceRadiusMultiplier",Values=(1,1,1,1,1))
```
::: info LAST UPDATED
<span style="color: #ffd369;">10-20-2024 by Mike</span>
:::

## Multipliers:
```cs
Multiplier.HealthRecovery.Resting",Values=(1,1,1,1,1))
Multiplier.HealthRecovery.Sleeping",Values=(1,1,1,1,1))
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
Multiplier.StaminaRecovery.Resting",Values=(1,1,1,2,2))
Multiplier.StaminaRecovery.Sleeping",Values=(1,1,1,4,4))
Multiplier.StaminaRecovery.Standing",Values=(1,1,1,1.2,1.2))
Multiplier.StaminaRecovery.Walking",Values=(0.9,0.9,0.9,0.9,0.9))
Multiplier.StaminaRecovery.Trotting",Values=(0.75,0.75,0.75,0.75,0.75))
Multiplier.StaminaRecovery.Sprinting",Values=(1,1,1,1,1))
Multiplier.StaminaRecovery.Swimming",Values=(1,1,1,150,150))
Multiplier.StaminaRecovery.FastSwimming",Values=(1,1,1,150,150))
Multiplier.StaminaRecovery.Diving",Values=(1,1,1,150,150))
Multiplier.StaminaRecovery.FastDiving",Values=(1,1,1,150,150))
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
Multiplier.LegHealRate.Resting",Values=(1,1,1,1,1))
Multiplier.LegHealRate.Sleeping",Values=(1,1,1,1,1))
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
Multiplier.BleedingRate.Resting",Values=(1,1,1,1,1))
Multiplier.BleedingRate.Sleeping",Values=(1,1,1,1,1))
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
Multiplier.BleedingHealRate.Resting",Values=(1,1,1,6,6))
Multiplier.BleedingHealRate.Sleeping",Values=(1,1,1,9,9))
Multiplier.BleedingHealRate.Standing",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Walking",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Trotting",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Sprinting",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Swimming",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Diving",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.FastDiving",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Crouching",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.BleedingHealRate.Jumping",Values=(1,1,1,1,1))
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
Multiplier.PoisonHealRate.Resting",Values=(1,1,1,6,6))
Multiplier.PoisonHealRate.Sleeping",Values=(1,1,1,9,9))
Multiplier.PoisonHealRate.Standing",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Walking",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Trotting",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Sprinting",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Swimming",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Diving",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.FastDiving",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Crouching",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.PoisonHealRate.Jumping",Values=(1,1,1,1,1))
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
Multiplier.VenomHealRate.Resting",Values=(1,1,1,6,6))
Multiplier.VenomHealRate.Sleeping",Values=(1,1,1,9,9))
Multiplier.VenomHealRate.Standing",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Walking",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Trotting",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Sprinting",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Swimming",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.FastSwimming",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Diving",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.FastDiving",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Crouching",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.CrouchWalking",Values=(1,1,1,1,1))
Multiplier.VenomHealRate.Jumping",Values=(1,1,1,1,1))
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
Multiplier.IncomingDamage.Resting",Values=(1,1,1,0.8,0.8))
Multiplier.IncomingDamage.Sleeping",Values=(1,1,1,0.8,0.8))
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
BodyFoodDecayPerSecond",Values=(1,1,1,1,1))
```
::: info LAST UPDATED
<span style="color: #ffd369;">10-20-2024 by Mike</span>
:::

## Combat:
```cs
StaminaTrotCostPerSecond",Values=(0,0,0,0,0))
StaminaSprintCostPerSecond",Values=(0.2,0.25,0.3,0.35,0.4))
StaminaSwimCostPerSecond",Values=(0,0,0,0,0))
StaminaFastSwimCostPerSecond",Values=(1.6,1.9,2.2,2.7,3))
StaminaDiveCostPerSecond",Values=(0,0,0,0,0))
StaminaFastDiveCostPerSecond",Values=(1.6,1.9,2.2,2.7,3))
StaminaJumpCost",Values=(5,5,5,5,5))
DashDamage",Values=(0,0,0,0,0))
DashCooldown",Values=(2.5,2.5,2.5,2.5,2.5))
DashStrength",Values=(6500,6500,6500,6500,6500))
DashCost",Values=(5,5,5,5,5))
BumpDamage",Values=(0,0,0,0,0))
BumpCooldown",Values=(2.5,2.5,2.5,2.5,2.5))
BumpCost",Values=(5,5,5,5,5))
ChillAtmosphereDamageReduction",Values=(0.85,0.85,0.85,0.85,0.85))
ChillAtmosphereRadius",Values=(5000,5000,5000,5000,5000))
PositiveVibesHealingRate",Values=(1.2,1.2,1.2,1.2,1.2))
PositiveVibesRadius",Values=(5000,5000,5000,5000,5000))
HangoutspotHungerDrainRate",Values=(0.75,0.75,0.75,0.75,0.75))
HangoutspotRadius",Values=(5000,5000,5000,5000,5000))
LifeguardOxygenDrain",Values=(0.75,0.75,0.75,0.75,0.75))
LifeguardRadius",Values=(5000,5000,5000,5000,5000))
ShowcaseSpeedBuff",Values=(1.12,1.12,1.12,1.12,1.12))
ShowcaseBuffRadius",Values=(2500,2500,2500,2500,2500))
ShowcaseCooldown",Values=(15,15,15,15,15))
ShowcaseBuffDuration",Values=(60,60,60,60,60))
PresentationCooldownDurationMultiplier",Values=(0.9,0.9,0.9,0.9,0.9))
PresentationCooldown",Values=(15,15,15,15,15))
PresentationBuffDuration",Values=(30,30,30,30,30))
RepairShopHealingRate",Values=(8,8,8,8,8))
RepairShopCost",Values=(2.5,2.5,2.5,2.5,2.5))
RepairShopTriggerRate",Values=(6,6,6,6,6))
PitStopHealingRate",Values=(1,1,1,1,1))
PitStopBleedHealingRate",Values=(1.4,1.4,1.4,1.4,1.4))
PitStopVenomHealingRate",Values=(1.4,1.4,1.4,1.4,1.4))
PitStopBuffDuration",Values=(20,20,20,20,20))
PitStopCost",Values=(10,10,10,10,10))
PitStopCooldown",Values=(10,10,10,10,10))
TuneUpHealingRate",Values=(1,1,1,1,1))
TuneUpStaminaRegenRate",Values=(1.12,1.12,1.12,1.12,1.12))
TuneUpStaminaRunningDrain",Values=(0.9,0.9,0.9,0.9,0.9))
TuneUpBuffDuration",Values=(30,30,30,30,30))
TuneUpCost",Values=(15,15,15,15,15))
TuneUpCooldown",Values=(20,20,20,20,20))
SelfCareRoutineHealingRate",Values=(6,6,6,6,6))
SelfCareRoutineBuffDuration",Values=(20,20,20,20,20))
SelfCareRoutineCost",Values=(15,15,15,15,15))
SelfCareRoutineCooldown",Values=(60,60,60,60,60))
LivingProjectileBaseDamage",Values=(6,6,6,6,6))
LivingProjectileDamageMultiPerStack",Values=(1.2,1.2,1.2,1.2,1.2))
LivingProjectileStackGainRate",Values=(1,1,1,1,1))
HibberGangArmourBuff",Values=(1.04,1.04,1.04,1.04,1.04))
HibberGangRadius",Values=(5000,5000,5000,5000,5000))
InoculationHealingRate",Values=(1,1,1,1,1))
InoculationBleedHealingRate",Values=(1,1,1,1,1))
InoculationVenomHealingRate",Values=(1.2,1.2,1.2,1.2,1.2))
InoculationBuffDuration",Values=(120,120,120,120,120))
InoculationCost",Values=(20,20,20,20,20))
InoculationHealthCost",Values=(20,20,20,20,20))
InoculationCooldown",Values=(45,45,45,45,45))
HolisticMedicineHealingRate",Values=(1.2,1.2,1.2,1.2,1.2))
HolisticMedicineBleedHealingRate",Values=(1,1,1,1,1))
HolisticMedicineVenomHealingRate",Values=(1,1,1,1,1))
HolisticMedicineBuffDuration",Values=(120,120,120,120,120))
HolisticMedicineCost",Values=(20,20,20,20,20))
HolisticMedicineHealthCost",Values=(20,20,20,20,20))
HolisticMedicineCooldown",Values=(45,45,45,45,45))
HugofLifeStaminaRestore",Values=(15,15,15,15,15))
HugofLifeOxygenRestore",Values=(15,15,15,15,15))
HugofLifeCost",Values=(20,20,20,20,20))
HugofLifeHealthCost",Values=(0,0,0,0,0))
HugofLifeCooldown",Values=(10,10,10,10,10))
BloodTransfusionHealingRate",Values=(1,1,1,1,1))
BloodTransfusionBleedHealingRate",Values=(1.2,1.2,1.2,1.2,1.2))
BloodTransfusionVenomHealingRate",Values=(1,1,1,1,1))
BloodTransfusionBuffDuration",Values=(120,120,120,120,120))
BloodTransfusionCost",Values=(20,20,20,20,20))
BloodTransfusionHealthCost",Values=(20,20,20,20,20))
BloodTransfusionCooldown",Values=(45,45,45,45,45))
PreciousCargoSpeedMultiplier",Values=(1.2,1.2,1.2,1.2,1.2))
BitandPiecesHungerDrain",Values=(1.2,1.2,1.2,1.2,1.2))
BitandPiecesStaminaRegen",Values=(1.2,1.2,1.2,1.2,1.2))
ChipShopHungerDrain",Values=(0.7,0.7,0.7,0.7,0.7))
ChipShopWaterSpeed",Values=(1.1,1.1,1.1,1.1,1.1))
QuestingKnightHungerDrain",Values=(0.4,0.4,0.4,0.4,0.4))
QuestingKnightLandSpeed",Values=(1.1,1.1,1.1,1.1,1.1))
CementwhenhewasSixHungerDrain",Values=(1,1,1,1,1))
CementwhenhewasSixArmourMultiplier",Values=(1.1,1.1,1.1,1.1,1.1))
FlameDecalsSpeedMultiplier",Values=(1.2,1.2,1.2,1.2,1.2))
VeryThickSkinArmourMultiplier",Values=(1.35,1.35,1.35,1.35,1.35))
WellFittedShellArmourMultiplier",Values=(1.1,1.1,1.1,1.1,1.1))
WellFittedShellSpeedMultiplier",Values=(1.1,1.1,1.1,1.1,1.1))
ComfyCarapaceHealthRegenMultiplier",Values=(1.4,1.4,1.4,1.4,1.4))
HeadEmptyHeadArmourMultiplier",Values=(1.15,1.15,1.15,1.15,1.15))
BugRelatedThoughtsSpeed",Values=(1.1,1.1,1.1,1.1,1.1))
TinyWizardHatCooldownDurationMultiplier",Values=(0.84,0.84,0.84,0.84,0.84))
SpecialBloodIncomingBleedMultiplier",Values=(0.1,0.1,0.1,0.1,0.1))
SpecialBloodIncomingVenomMultiplier",Values=(0.1,0.1,0.1,0.1,0.1))
```
::: info LAST UPDATED
<span style="color: #ffd369;">10-20-2024 by Mike</span>
:::
<p style="text-align: center;"><span data-preserver-spaces="true">Experience seamless gameplay with our top-of-the-line "</span><strong><span data-preserver-spaces="true">Path Of Titans</span></strong><span data-preserver-spaces="true">" video game servers for hosting. Dominate the virtual world and build your killer dinosaur-themed world with your gaming squad. </span><span data-preserver-spaces="true">With </span><strong><span data-preserver-spaces="true">lightning-fast hardware</span></strong><span data-preserver-spaces="true">, </span><strong><span data-preserver-spaces="true">unrivaled performance</span></strong><span data-preserver-spaces="true">, and </span><strong><span data-preserver-spaces="true">reliable uptime</span></strong><span data-preserver-spaces="true">, our servers ensure an immersive gaming experience for your communitys needs. </span><span data-preserver-spaces="true">Take advantage of our cutting-edge features, including </span><strong><span data-preserver-spaces="true">customizable settings</span></strong><span data-preserver-spaces="true">, an </span><strong><span data-preserver-spaces="true">intuitive control panel</span></strong><span data-preserver-spaces="true">, and </span><strong><span data-preserver-spaces="true">dedicated support</span></strong><span data-preserver-spaces="true">. Dont miss out on this opportunity to level up your gaming experience.</span></p>
<h3 style="text-align: center;"><span style="color: #ffd369;"><a style="color: #ffd369;" href="https://gameservershub.com/hosting/path-of-titans/"><strong>Get your server today!</strong></a></span></h3>