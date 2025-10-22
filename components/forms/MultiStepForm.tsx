'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Zod schemas for each step
const step1Schema = z.object({
  projectType: z.string().min(1, 'Veuillez sélectionner un type de projet'),
});

const step2Schema = z.object({
  surface: z.string().optional(),
  budget: z.string().optional(),
});

const step3Schema = z.object({
  timing: z.string().min(1, 'Veuillez sélectionner une période'),
});

const step4Schema = z.object({
  firstName: z.string().min(2, 'Prénom requis (min. 2 caractères)'),
  lastName: z.string().min(2, 'Nom requis (min. 2 caractères)'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  postalCode: z.string().min(5, 'Code postal requis'),
  message: z.string().optional(),
  rgpdConsent: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter la politique de confidentialité',
  }),
});

const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema).merge(step4Schema);

type FormData = z.infer<typeof fullSchema>;

const PROJECT_TYPES = [
  { value: 'installation', label: 'Installation', icon: '🔧', description: 'Nouvelle installation' },
  { value: 'reparation', label: 'Réparation', icon: '🛠️', description: 'Dépannage / Réparation' },
  { value: 'renovation', label: 'Rénovation', icon: '🏠', description: 'Rénovation complète' },
  { value: 'urgence', label: 'Urgence', icon: '🚨', description: 'Intervention rapide' },
];

const TIMING_OPTIONS = [
  { value: 'urgent', label: 'Le plus tôt possible' },
  { value: '1-month', label: 'Dans le mois' },
  { value: '3-months', label: "Dans les 3 mois" },
  { value: 'flexible', label: 'Flexible' },
];

const BUDGET_RANGES = [
  { value: '0-500', label: 'Moins de 500€' },
  { value: '500-1500', label: '500€ - 1500€' },
  { value: '1500-5000', label: '1500€ - 5000€' },
  { value: '5000+', label: 'Plus de 5000€' },
];

export const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(fullSchema),
    mode: 'onChange',
  });

  const projectType = watch('projectType');
  const timing = watch('timing');
  const budget = watch('budget');

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const validateStep = async (step: number) => {
    let isValid = false;
    switch (step) {
      case 1:
        isValid = await trigger('projectType');
        break;
      case 2:
        isValid = true; // Optional fields
        break;
      case 3:
        isValid = await trigger('timing');
        break;
      case 4:
        isValid = await trigger([
          'firstName',
          'lastName',
          'email',
          'phone',
          'postalCode',
          'rgpdConsent',
        ]);
        break;
    }
    return isValid;
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Form data:', data);
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-12 shadow-3xl text-center"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-primary mb-4">Demande envoyée !</h3>
        <p className="text-gray-600 text-lg mb-6">
          Merci pour votre demande. Nous vous recontacterons dans les 24h pour établir
          votre devis gratuit.
        </p>
        <Button
          variant="accent"
          size="lg"
          onClick={() => {
            setIsSuccess(false);
            setCurrentStep(1);
          }}
        >
          Nouvelle Demande
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-3xl overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-primary-50 p-6">
        <div className="flex justify-between mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`flex items-center ${
                step < 4 ? 'flex-1' : ''
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  step < currentStep
                    ? 'bg-green-500 text-white'
                    : step === currentStep
                    ? 'bg-accent text-white scale-110'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {step < currentStep ? <CheckCircle2 className="w-6 h-6" /> : step}
              </div>
              {step < 4 && (
                <div className="flex-1 h-1 mx-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-accent transition-all duration-500 ${
                      step < currentStep ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <span className="text-sm font-semibold text-gray-600">
            Étape {currentStep} sur {totalSteps}
          </span>
        </div>
      </div>

      {/* Form Steps */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Quel est votre projet ?
              </h3>
              <p className="text-gray-600 mb-8">
                Sélectionnez le type de service dont vous avez besoin
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECT_TYPES.map((type) => (
                  <label
                    key={type.value}
                    className={`cursor-pointer border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${
                      projectType === type.value
                        ? 'border-accent bg-accent/5 shadow-lg'
                        : 'border-gray-200 hover:border-accent'
                    }`}
                  >
                    <input
                      type="radio"
                      value={type.value}
                      {...register('projectType')}
                      className="sr-only"
                    />
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{type.icon}</span>
                      <div>
                        <div className="font-bold text-lg text-primary">
                          {type.label}
                        </div>
                        <div className="text-sm text-gray-600">
                          {type.description}
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              {errors.projectType && (
                <p className="mt-2 text-red-600 text-sm">{errors.projectType.message}</p>
              )}
            </motion.div>
          )}

          {/* Step 2: Surface & Budget */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Caractéristiques du projet
              </h3>
              <p className="text-gray-600 mb-8">
                Ces informations nous aident à vous proposer un devis plus précis
                (optionnel)
              </p>

              <div className="space-y-6">
                <Input
                  label="Surface approximative (m²)"
                  type="number"
                  placeholder="Ex: 50"
                  {...register('surface')}
                  helperText="Si applicable à votre projet"
                />

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Budget prévisionnel
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {BUDGET_RANGES.map((range) => (
                      <label
                        key={range.value}
                        className={`cursor-pointer border-2 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-md ${
                          budget === range.value
                            ? 'border-accent bg-accent/5 shadow-md'
                            : 'border-gray-200 hover:border-accent'
                        }`}
                      >
                        <input
                          type="radio"
                          value={range.value}
                          {...register('budget')}
                          className="sr-only"
                        />
                        <span className="font-semibold text-primary">
                          {range.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Timing */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Quand souhaitez-vous commencer ?
              </h3>
              <p className="text-gray-600 mb-8">
                Sélectionnez la période qui vous convient
              </p>

              <div className="space-y-3">
                {TIMING_OPTIONS.map((option) => (
                  <label
                    key={option.value}
                    className={`cursor-pointer border-2 rounded-xl p-5 flex items-center gap-4 transition-all duration-300 hover:shadow-lg ${
                      timing === option.value
                        ? 'border-accent bg-accent/5 shadow-lg'
                        : 'border-gray-200 hover:border-accent'
                    }`}
                  >
                    <input
                      type="radio"
                      value={option.value}
                      {...register('timing')}
                      className="w-5 h-5 text-accent"
                    />
                    <span className="font-semibold text-primary text-lg">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.timing && (
                <p className="mt-2 text-red-600 text-sm">{errors.timing.message}</p>
              )}
            </motion.div>
          )}

          {/* Step 4: Contact Info */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Vos coordonnées
              </h3>
              <p className="text-gray-600 mb-8">
                Pour vous envoyer votre devis gratuit sous 48h
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Prénom"
                    {...register('firstName')}
                    error={errors.firstName?.message}
                    required
                  />
                  <Input
                    label="Nom"
                    {...register('lastName')}
                    error={errors.lastName?.message}
                    required
                  />
                </div>

                <Input
                  label="Email"
                  type="email"
                  {...register('email')}
                  error={errors.email?.message}
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Téléphone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    {...register('phone')}
                    error={errors.phone?.message}
                    required
                  />
                  <Input
                    label="Code Postal"
                    placeholder="13200"
                    {...register('postalCode')}
                    error={errors.postalCode?.message}
                    required
                  />
                </div>

                <Textarea
                  label="Message (optionnel)"
                  placeholder="Décrivez-nous votre projet..."
                  {...register('message')}
                  rows={4}
                />

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="rgpd"
                    {...register('rgpdConsent')}
                    className="mt-1 w-5 h-5 text-accent rounded"
                  />
                  <label htmlFor="rgpd" className="text-sm text-gray-700">
                    J'accepte que mes données soient utilisées pour me recontacter
                    dans le cadre de ma demande de devis. Vos données ne seront
                    jamais partagées avec des tiers.{' '}
                    <a
                      href="/politique-confidentialite"
                      className="text-accent hover:underline"
                    >
                      Voir notre politique de confidentialité
                    </a>
                    <span className="text-red-600 ml-1">*</span>
                  </label>
                </div>
                {errors.rgpdConsent && (
                  <p className="text-red-600 text-sm">{errors.rgpdConsent.message}</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
          {currentStep > 1 ? (
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={prevStep}
            >
              <ChevronLeft className="w-5 h-5" />
              Précédent
            </Button>
          ) : (
            <div />
          )}

          {currentStep < totalSteps ? (
            <Button
              type="button"
              variant="accent"
              size="lg"
              onClick={nextStep}
            >
              Suivant
              <ChevronRight className="w-5 h-5" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="accent"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
